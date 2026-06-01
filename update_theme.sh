#!/bin/bash

# Read the entire CSS file
content=$(cat css/style.css)

# Replace light backgrounds and colors with dark theme equivalents
content=$(echo "$content" | sed 's/#f8fafc/rgba(15, 23, 42, 0.3)/g')
content=$(echo "$content" | sed 's/#f0f9ff/rgba(30, 41, 59, 0.6)/g')
content=$(echo "$content" | sed 's/#f1f5f9/rgba(30, 41, 59, 0.6)/g')
content=$(echo "$content" | sed 's/#f0e7ff/rgba(124, 58, 237, 0.2)/g')
content=$(echo "$content" | sed 's/#ffffff/rgba(30, 41, 59, 0.8)/g')
content=$(echo "$content" | sed 's/#faf5ff/rgba(30, 41, 59, 0.7)/g')
content=$(echo "$content" | sed 's/#fcfdff/rgba(30, 41, 59, 0.75)/g')
content=$(echo "$content" | sed 's/#e0edff/rgba(30, 41, 59, 0.6)/g')
content=$(echo "$content" | sed 's/#e2e8f0/rgba(148, 163, 184, 0.2)/g')
content=$(echo "$content" | sed 's/#ddd6fe/rgba(148, 163, 184, 0.25)/g')
content=$(echo "$content" | sed 's/#5B21B6/#7C3AED/g')
content=$(echo "$content" | sed 's/#4C1D95/#6D28D9/g')
content=$(echo "$content" | sed 's/#A855F7/#A78BFA/g')
content=$(echo "$content" | sed 's/#cbd5e1/var(--text-secondary)/g')

# Write back the CSS
echo "$content" > css/style.css
