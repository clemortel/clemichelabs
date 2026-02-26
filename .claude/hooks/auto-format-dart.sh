#!/bin/bash
# Auto-format Dart files after Claude edits/writes them
# Skips generated files (.g.dart, .freezed.dart, .mocks.dart)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Skip if no file path or not a Dart file
if [ -z "$FILE_PATH" ] || [[ "$FILE_PATH" != *.dart ]]; then
  exit 0
fi

# Skip generated files
if [[ "$FILE_PATH" == *.g.dart ]] || \
   [[ "$FILE_PATH" == *.freezed.dart ]] || \
   [[ "$FILE_PATH" == *.mocks.dart ]]; then
  exit 0
fi

# Format the file silently
dart format "$FILE_PATH" 2>/dev/null || true

exit 0
