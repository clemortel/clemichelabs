import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

enum Section {
  hero,
  services,
  portfolio,
  about,
  process,
  testimonials,
  contact,
}

final NotifierProvider<ScrollNotifier, Section> activeSectionProvider =
    NotifierProvider<ScrollNotifier, Section>(ScrollNotifier.new);

class ScrollNotifier extends Notifier<Section> {
  final Map<Section, GlobalKey> _sectionKeys = {
    for (final Section section in Section.values)
      section: GlobalKey(debugLabel: section.name),
  };

  Map<Section, GlobalKey> get sectionKeys => _sectionKeys;

  @override
  Section build() => Section.hero;

  void setActive(Section section) {
    state = section;
  }

  void scrollTo(Section section) {
    final GlobalKey? key = _sectionKeys[section];
    if (key?.currentContext != null) {
      Scrollable.ensureVisible(
        key!.currentContext!,
        duration: const Duration(milliseconds: 600),
        curve: Curves.easeInOutCubic,
      );
      state = section;
    }
  }

  void updateFromScroll(ScrollController controller) {
    for (final Section section in Section.values.reversed) {
      final GlobalKey? key = _sectionKeys[section];
      if (key?.currentContext != null) {
        final RenderBox? box =
            key!.currentContext!.findRenderObject() as RenderBox?;
        if (box != null) {
          final Offset position = box.localToGlobal(Offset.zero);
          if (position.dy <= 200) {
            state = section;
            return;
          }
        }
      }
    }
  }
}
