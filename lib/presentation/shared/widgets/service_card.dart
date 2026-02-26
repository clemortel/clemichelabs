import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:flutter/material.dart';

class ServiceCard extends StatefulWidget {
  final ServiceItem service;

  const ServiceCard({required this.service, super.key});

  @override
  State<ServiceCard> createState() => _ServiceCardState();
}

class _ServiceCardState extends State<ServiceCard> {
  bool _hovering = false;

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovering = true),
      onExit: (_) => setState(() => _hovering = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.all(AppTheme.spacingLg),
        decoration: BoxDecoration(
          color: isDark ? AppTheme.cardDark : Colors.white,
          borderRadius: BorderRadius.circular(AppTheme.radiusMd),
          border: Border.all(
            color: _hovering
                ? AppTheme.primary.withValues(alpha: 0.3)
                : (isDark
                    ? Colors.white.withValues(alpha: 0.05)
                    : Colors.black.withValues(alpha: 0.05)),
          ),
          boxShadow: _hovering ? AppTheme.subtleGlow : null,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.service.icon,
              style: const TextStyle(fontSize: 40),
            ),
            const SizedBox(height: AppTheme.spacingMd),
            Text(
              widget.service.title,
              style: theme.textTheme.headlineSmall,
            ),
            const SizedBox(height: AppTheme.spacingSm),
            Text(
              widget.service.description,
              style: theme.textTheme.bodyMedium?.copyWith(
                color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
              ),
            ),
            const SizedBox(height: AppTheme.spacingMd),
            ...widget.service.features.map(
              (String feature) => Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: Row(
                  children: [
                    const Icon(
                      Icons.check_circle_outline,
                      size: 16,
                      color: AppTheme.primary,
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        feature,
                        style: theme.textTheme.bodySmall?.copyWith(
                          color: isDark ? Colors.white70 : Colors.black54,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
