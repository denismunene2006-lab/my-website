#!/bin/bash

# Read CSS file
css=$(cat css/style.css)

# Replace --secondary references with --text-main
css=$(echo "$css" | sed 's/color: var(--secondary)/color: var(--text-main)/g')

# Replace direct light dark text colors
css=$(echo "$css" | sed 's/color: #0f172a/color: var(--text-main)/g')
css=$(echo "$css" | sed 's/color: #1e293b/color: var(--text-main)/g')

# Fix border colors that are too light
css=$(echo "$css" | sed 's/border: 1px solid #bae6fd/border: 1px solid rgba(148, 163, 184, 0.3)/g')
css=$(echo "$css" | sed 's/border-color: #1e3a8a/border-color: rgba(124, 58, 237, 0.3)/g')

# Write back
echo "$css" > css/style.css
echo "Final theme fixes applied"
