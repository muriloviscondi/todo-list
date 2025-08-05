'use client';

import { useServerInsertedHTML } from 'next/navigation';
import { useState, useRef } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheet] = useState(() => new ServerStyleSheet());
  const isInserted = useRef(false);

  useServerInsertedHTML(() => {
    if (!isInserted.current) {
      isInserted.current = true;
      return <>{sheet.getStyleElement()}</>;
    }
    return null;
  });

  return (
    <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
  );
}
