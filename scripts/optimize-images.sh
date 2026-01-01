#!/bin/bash

# Image Optimization Script for Flood Doctor
# Converts PNG/JPEG to WebP and generates multiple sizes for srcset
# Requires: cwebp (brew install webp)

set -e

IMAGE_DIR="public/images/process-tiles"
OUTPUT_DIR="public/images/process-tiles-optimized"
QUALITY=80
SIZES=(320 640 960)

# Check for required tools
if ! command -v cwebp &> /dev/null; then
    echo "Error: cwebp not found. Install with: brew install webp"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "Optimizing images in $IMAGE_DIR..."
echo "Output: $OUTPUT_DIR"
echo ""

# Process each image
shopt -s nullglob
for img in "$IMAGE_DIR"/*.png "$IMAGE_DIR"/*.PNG "$IMAGE_DIR"/*.jpeg "$IMAGE_DIR"/*.jpg "$IMAGE_DIR"/*.JPEG "$IMAGE_DIR"/*.JPG; do
    [ -f "$img" ] || continue

    filename=$(basename "$img")
    name="${filename%.*}"

    echo "Processing: $filename"

    # Convert to WebP at original size
    cwebp -q $QUALITY "$img" -o "$OUTPUT_DIR/${name}.webp" 2>/dev/null

    # Generate responsive sizes
    for size in "${SIZES[@]}"; do
        cwebp -q $QUALITY -resize $size 0 "$img" -o "$OUTPUT_DIR/${name}-${size}w.webp" 2>/dev/null
    done

    # Get file sizes for comparison
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    webp_size=$(stat -f%z "$OUTPUT_DIR/${name}.webp" 2>/dev/null || stat -c%s "$OUTPUT_DIR/${name}.webp" 2>/dev/null)

    if [ -n "$original_size" ] && [ -n "$webp_size" ] && [ "$original_size" -gt 0 ]; then
        savings=$((100 - (webp_size * 100 / original_size)))
        echo "  → Original: $((original_size / 1024))KB | WebP: $((webp_size / 1024))KB | Saved: ${savings}%"
    fi
done

echo ""
echo "Done! Optimized images saved to $OUTPUT_DIR"
echo ""
echo "Total files created:"
ls -1 "$OUTPUT_DIR" | wc -l
