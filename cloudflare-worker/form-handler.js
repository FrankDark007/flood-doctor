/**
 * Cloudflare Worker - Form Handler for flood.doctor
 *
 * Receives form submissions and sends email notifications via Resend
 *
 * Deploy: wrangler deploy
 */

export default {
  async fetch(request, env) {
    const RESEND_API_KEY = env?.RESEND_API_KEY;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Email service is not configured'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const data = await request.json();

      // Validate required fields
      if (!data.name || !data.phone) {
        return new Response(JSON.stringify({
          success: false,
          error: 'Name and phone are required'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Build email content
      const urgencyEmoji = data.urgency === 'emergency' ? '🚨 EMERGENCY' :
                          data.urgency === 'urgent' ? '⚠️ Urgent' : '📋 New';

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: ${data.urgency === 'emergency' ? '#dc2626' : data.urgency === 'urgent' ? '#f59e0b' : '#1a73e8'}; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">${urgencyEmoji} Service Request</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">From flood.doctor website</p>
          </div>

          <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;">Name:</td>
                <td style="padding: 8px 0; font-weight: bold;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #1a73e8; font-weight: bold; font-size: 18px;">${data.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                <td style="padding: 8px 0;">${data.email || 'Not provided'}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h3 style="margin-top: 0; color: #374151;">Service Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;">Service:</td>
                <td style="padding: 8px 0;">${(data.serviceType || 'Not specified').replace('-', ' ')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Property:</td>
                <td style="padding: 8px 0;">${data.propertyType || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Urgency:</td>
                <td style="padding: 8px 0; ${data.urgency === 'emergency' ? 'color: #dc2626; font-weight: bold;' : ''}">${data.urgency || 'Standard'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Address:</td>
                <td style="padding: 8px 0;">${data.address || 'Not provided'}${data.city ? ', ' + data.city : ''}${data.zip ? ' ' + data.zip : ''}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Insurance:</td>
                <td style="padding: 8px 0;">${data.insurance || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          ${data.message ? `
          <div style="background: #fffbeb; padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h3 style="margin-top: 0; color: #374151;">Customer Message</h3>
            <p style="margin: 0; color: #4b5563;">${data.message}</p>
          </div>
          ` : ''}

          <div style="background: #f3f4f6; padding: 15px 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
            <p style="margin: 5px 0 0 0;">Source: ${data.sourceUrl || 'flood.doctor'}</p>
          </div>
        </div>
      `;

      // Send email via Resend
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Flood Doctor <noreply@mail.flood.doctor>',
          to: ['help@flood.doctor'],
          subject: `${urgencyEmoji} Service Request - ${data.name} (${data.phone})`,
          html: emailHtml,
        }),
      });

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok) {
        console.error('Resend error:', emailResult);
        throw new Error(emailResult.message || 'Failed to send email notification');
      }

      console.log('Email sent successfully:', emailResult.id);

      return new Response(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Form handler error:', error);
      return new Response(JSON.stringify({
        success: false,
        error: error.message || 'Internal server error'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
