import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:clemichelabs/presentation/shared/widgets/project_card.dart';
import 'package:clemichelabs/presentation/shared/widgets/section_wrapper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class PortfolioSection extends StatelessWidget {
  final GlobalKey sectionKey;

  const PortfolioSection({required this.sectionKey, super.key});

  @override
  Widget build(BuildContext context) {
    final int cols = Responsive.gridColumns(context);

    return SectionWrapper(
      sectionKey: sectionKey,
      title: 'Our Work',
      subtitle: 'Products we\'ve built, launched, and are growing.',
      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (cols == 1) {
            return Column(
              children: [
                for (int i = 0; i < AppContent.projects.length; i++) ...[
                  if (i > 0) const SizedBox(height: 16),
                  ProjectCard(project: AppContent.projects[i])
                      .animate()
                      .fadeIn(duration: 500.ms, delay: (i * 150).ms)
                      .slideY(begin: 0.1, end: 0),
                ],
              ],
            );
          }
          return Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (int i = 0; i < AppContent.projects.length; i++) ...[
                if (i > 0) const SizedBox(width: 16),
                Expanded(
                  child: ProjectCard(project: AppContent.projects[i])
                      .animate()
                      .fadeIn(duration: 500.ms, delay: (i * 150).ms)
                      .slideY(begin: 0.1, end: 0),
                ),
              ],
            ],
          );
        },
      ),
    );
  }
}
