import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class NeonButton extends StatefulWidget {
  final String label;
  final VoidCallback onPressed;
  final bool outlined;
  final IconData? icon;

  const NeonButton({
    required this.label,
    required this.onPressed,
    this.outlined = false,
    this.icon,
    super.key,
  });

  @override
  State<NeonButton> createState() => _NeonButtonState();
}

class _NeonButtonState extends State<NeonButton> {
  bool _hovering = false;

  @override
  Widget build(BuildContext context) {
    final bool isDark = Theme.of(context).brightness == Brightness.dark;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovering = true),
      onExit: (_) => setState(() => _hovering = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(AppTheme.radiusFull),
          boxShadow: _hovering && !widget.outlined
              ? AppTheme.subtleGlow
              : null,
        ),
        child: widget.outlined
            ? OutlinedButton(
                onPressed: widget.onPressed,
                style: OutlinedButton.styleFrom(
                  foregroundColor: isDark ? Colors.white : Colors.black87,
                  side: BorderSide(
                    color: isDark
                        ? Colors.white.withValues(alpha: 0.2)
                        : Colors.black.withValues(alpha: 0.2),
                  ),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 24,
                    vertical: 16,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(AppTheme.radiusFull),
                  ),
                ),
                child: _buildChild(),
              )
            : ElevatedButton(
                onPressed: widget.onPressed,
                child: _buildChild(),
              ),
      ),
    );
  }

  Widget _buildChild() {
    if (widget.icon != null) {
      return Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(widget.icon, size: 18),
          const SizedBox(width: 8),
          Text(widget.label),
        ],
      );
    }
    return Text(widget.label);
  }
}
