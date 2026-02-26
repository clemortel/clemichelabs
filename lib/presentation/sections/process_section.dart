import 'package:clemichelabs/core/constants/content.dart';
import 'package:clemichelabs/core/utils/responsive.dart';
import 'package:clemichelabs/presentation/shared/widgets/process_step_card.dart';
import 'package:clemichelabs/presentation/shared/widgets/section_wrapper.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class ProcessSection extends StatelessWidget {
  final GlobalKey sectionKey;

  const ProcessSection({required this.sectionKey, super.key});

  @override
  Widget build(BuildContext context) {
    final int cols = Responsive.gridColumns(context);

    return SectionWrapper(
      sectionKey: sectionKey,
      title: 'How We Work',
      subtitle: 'From first call to production in weeks, not months.',
      child: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          if (cols == 1) {
            return Column(
              children: [
                for (int i = 0;
                    i < AppContent.processSteps.length;
                    i++) ...[
                  if (i > 0) const SizedBox(height: 16),
                  ProcessStepCard(step: AppContent.processSteps[i])
                      .animate()
                      .fadeIn(duration: 500.ms, delay: (i * 150).ms)
                      .slideY(begin: 0.1, end: 0),
                ],
              ],
            );
          }
          // 2x2 grid for tablet, 4 cols for desktop
          final bool useTwoRows = cols < 3;
          if (useTwoRows) {
            return Column(
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (int i = 0; i < 2; i++) ...[
                      if (i > 0) const SizedBox(width: 16),
                      Expanded(
                        child: ProcessStepCard(
                          step: AppContent.processSteps[i],
                        )
                            .animate()
                            .fadeIn(
                              duration: 500.ms,
                              delay: (i * 150).ms,
                            )
                            .slideY(begin: 0.1, end: 0),
                      ),
                    ],
                  ],
                ),
                const SizedBox(height: 16),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (int i = 2; i < 4; i++) ...[
                      if (i > 2) const SizedBox(width: 16),
                      Expanded(
                        child: ProcessStepCard(
                          step: AppContent.processSteps[i],
                        )
                            .animate()
                            .fadeIn(
                              duration: 500.ms,
                              delay: (i * 150).ms,
                            )
                            .slideY(begin: 0.1, end: 0),
                      ),
                    ],
                  ],
                ),
              ],
            );
          }
          return Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              for (int i = 0; i < AppContent.processSteps.length; i++) ...[
                if (i > 0) const SizedBox(width: 16),
                Expanded(
                  child: ProcessStepCard(
                    step: AppContent.processSteps[i],
                  )
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
