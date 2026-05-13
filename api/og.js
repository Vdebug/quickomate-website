import { ImageResponse } from '@vercel/og';
import React from 'react';

export const config = { runtime: 'edge' };

const BG = '#F5F3EE';
const PRIMARY = '#111111';
const ACCENT = '#E63B2E';
const SURFACE = '#E8E4DD';

const h = React.createElement;

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const rawTitle = searchParams.get('title') || 'The Definitive AI Growth Partner for B2B Companies';
  const title = rawTitle.length > 110 ? rawTitle.slice(0, 107) + '…' : rawTitle;
  const tag = (searchParams.get('tag') || 'AI GROWTH PARTNER').toUpperCase();
  const kind = (searchParams.get('kind') || 'site').toLowerCase();

  const titleSize = title.length > 80 ? 56 : title.length > 60 ? 68 : title.length > 40 ? 80 : 96;
  const tagLabel = kind === 'article' ? `BLOG // ${tag}` : tag;

  return new ImageResponse(
    h('div', {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: BG,
        padding: 80,
        position: 'relative',
        fontFamily: 'sans-serif',
      },
    }, [
      h('div', {
        key: 'border',
        style: {
          position: 'absolute',
          top: 40, left: 40, right: 40, bottom: 40,
          border: `8px solid ${PRIMARY}`,
        },
      }),
      h('div', {
        key: 'logo',
        style: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 },
      }, [
        h('div', {
          key: 'name',
          style: {
            fontSize: 40,
            fontWeight: 900,
            letterSpacing: -2,
            color: PRIMARY,
            textTransform: 'uppercase',
            display: 'flex',
          },
        }, 'Quickomate'),
        h('div', {
          key: 'bar',
          style: { width: 14, height: 40, background: ACCENT },
        }),
      ]),
      h('div', {
        key: 'tag',
        style: {
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: 4,
          color: PRIMARY,
          textTransform: 'uppercase',
          background: SURFACE,
          padding: '10px 20px',
          border: `3px solid ${PRIMARY}`,
          alignSelf: 'flex-start',
          marginBottom: 36,
          display: 'flex',
        },
      }, tagLabel),
      h('div', {
        key: 'title',
        style: {
          fontSize: titleSize,
          fontWeight: 900,
          letterSpacing: -3,
          color: PRIMARY,
          textTransform: 'uppercase',
          lineHeight: 0.95,
          display: 'flex',
          maxWidth: 1000,
        },
      }, title),
      h('div', {
        key: 'footer',
        style: {
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        },
      }, [
        h('div', {
          key: 'domain',
          style: {
            fontSize: 26,
            fontWeight: 700,
            color: PRIMARY,
            letterSpacing: 2,
            textTransform: 'uppercase',
            display: 'flex',
          },
        }, 'quickomate.com'),
        h('div', {
          key: 'status',
          style: {
            fontSize: 20,
            fontWeight: 700,
            color: '#fff',
            background: ACCENT,
            padding: '14px 28px',
            letterSpacing: 4,
            textTransform: 'uppercase',
            display: 'flex',
          },
        }, 'SYS.ONLINE'),
      ]),
    ]),
    { width: 1200, height: 630 }
  );
}
