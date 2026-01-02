/**
 * UI Primitives - Reusable component building blocks
 *
 * Usage examples:
 *
 * Card:
 *   <Card variant="interactive" padding="lg" radius="2xl">
 *     Content here
 *   </Card>
 *
 * IconBox:
 *   <IconBox icon={Phone} size="lg" color="primary" variant="soft" />
 *   <StepNumber number={1} size="md" color="primary" />
 *
 * Badge:
 *   <Badge color="green" variant="soft">Active</Badge>
 *   <StatusBadge status="active" />
 *   <PriorityBadge priority="high" />
 *
 * Section:
 *   <Section background="subtle" padding="xl" border="bottom">
 *     <SectionHeader title="Features" subtitle="..." align="center" />
 *     <SectionGrid columns={3} gap="md">
 *       ...cards
 *     </SectionGrid>
 *   </Section>
 */

// Card component and presets
export { default as Card, CardPresets } from './Card';

// IconBox and StepNumber
export { default as IconBox, StepNumber } from './IconBox';

// Badge and preset badges
export { default as Badge, StatusBadge, PriorityBadge, CategoryBadge } from './Badge';

// Section and related components
export { default as Section, SectionHeader, SectionGrid } from './Section';
