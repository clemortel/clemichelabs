import 'package:clemichelabs/application/scroll/scroll_provider.dart';
import 'package:clemichelabs/application/theme/theme_mode_provider.dart';
import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/theme/app_theme.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class NavBar extends ConsumerWidget {
  const NavBar({super.key});

  static const List<Section> _navSections = [
    Section.services,
    Section.portfolio,
    Section.about,
    Section.process,
    Section.contact,
  ];

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;
    final Section activeSection = ref.watch(activeSectionProvider);
    final bool isMobile = Responsive.isMobile(context);

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
      decoration: BoxDecoration(
        color: isDark
            ? AppTheme.backgroundDark.withValues(alpha: 0.9)
            : Colors.white.withValues(alpha: 0.9),
        border: Border(
          bottom: BorderSide(
            color: isDark
                ? Colors.white.withValues(alpha: 0.05)
                : Colors.black.withValues(alpha: 0.05),
          ),
        ),
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: Row(
            children: [
              // Logo
              GestureDetector(
                onTap: () => ref
                    .read(activeSectionProvider.notifier)
                    .scrollTo(Section.hero),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const CircleAvatar(
                      radius: 14,
                      backgroundImage: AssetImage(
                        'assets/images/photo_visage.jpg',
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      AppContent.brandName,
                      style: theme.textTheme.titleMedium?.copyWith(
                        color: AppTheme.primary,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
              ),
              const Spacer(),
              // Nav links (desktop only)
              if (!isMobile)
                ...List.generate(_navSections.length, (int index) {
                  final Section section = _navSections[index];
                  final bool isActive = activeSection == section;
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: _NavLink(
                      label: AppContent.navItems[index],
                      isActive: isActive,
                      onTap: () => ref
                          .read(activeSectionProvider.notifier)
                          .scrollTo(section),
                    ),
                  );
                }),
              const SizedBox(width: 8),
              // Theme toggle
              IconButton(
                onPressed: () => ref.read(themeModeProvider.notifier).toggle(),
                icon: Icon(
                  isDark ? Icons.light_mode_outlined : Icons.dark_mode_outlined,
                  color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
                  size: 20,
                ),
                tooltip: isDark ? 'Light mode' : 'Dark mode',
              ),
              // Mobile menu
              if (isMobile)
                _MobileMenuButton(
                  sections: _navSections,
                  activeSection: activeSection,
                ),
            ],
          ),
        ),
      ),
    );
  }
}

class _NavLink extends StatefulWidget {
  final String label;
  final bool isActive;
  final VoidCallback onTap;

  const _NavLink({
    required this.label,
    required this.isActive,
    required this.onTap,
  });

  @override
  State<_NavLink> createState() => _NavLinkState();
}

class _NavLinkState extends State<_NavLink> {
  bool _hovering = false;

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovering = true),
      onExit: (_) => setState(() => _hovering = false),
      cursor: SystemMouseCursors.click,
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedDefaultTextStyle(
          duration: const Duration(milliseconds: 150),
          style: theme.textTheme.bodyMedium!.copyWith(
            color: widget.isActive
                ? AppTheme.primary
                : _hovering
                ? (isDark ? Colors.white : Colors.black87)
                : (isDark ? AppTheme.textMuted : AppTheme.textMutedLight),
            fontWeight: widget.isActive ? FontWeight.w600 : FontWeight.normal,
          ),
          child: Text(widget.label),
        ),
      ),
    );
  }
}

class _MobileMenuButton extends ConsumerWidget {
  final List<Section> sections;
  final Section activeSection;

  const _MobileMenuButton({
    required this.sections,
    required this.activeSection,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ThemeData theme = Theme.of(context);
    final bool isDark = theme.brightness == Brightness.dark;

    return PopupMenuButton<Section>(
      icon: Icon(
        Icons.menu,
        color: isDark ? AppTheme.textMuted : AppTheme.textMutedLight,
      ),
      color: isDark ? AppTheme.cardDark : Colors.white,
      onSelected: (Section section) {
        ref.read(activeSectionProvider.notifier).scrollTo(section);
      },
      itemBuilder: (BuildContext context) {
        return List.generate(sections.length, (int index) {
          final Section section = sections[index];
          return PopupMenuItem<Section>(
            value: section,
            child: Text(
              AppContent.navItems[index],
              style: theme.textTheme.bodyMedium?.copyWith(
                color: activeSection == section ? AppTheme.primary : null,
                fontWeight: activeSection == section
                    ? FontWeight.w600
                    : FontWeight.normal,
              ),
            ),
          );
        });
      },
    );
  }
}
