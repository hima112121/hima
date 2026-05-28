# Bear Walking Video - Remotion

可愛い3Dのクマが歩く30秒間の動画をRemotionで作成しました。

## インストール

```bash
cd bear-walking-video
npm install
```

## 開発（スタジオで確認）

```bash
npm start
```

ブラウザで http://localhost:3000 を開いて、動画をプレビューできます。

## MP4として出力

```bash
npm run build
```

出力されたMP4ファイルは `out/video.mp4` に保存されます。

## 仕様

- **解像度**: 1920×1080
- **フレームレート**: 30fps
- **尺**: 30秒（900フレーム）
- **クマの動き**: 左から右へゆっくり歩く
- **手足**: 交互に動く
- **背景**: 森のような雰囲気（空と草原）

## コンポーネント構成

- **Bear.tsx**: 3Dのクマモデルと歩行アニメーション
- **Tree.tsx**: 背景の木
- **Scene.tsx**: Three.jsシーン（カメラ、ライト、背景）
- **Composition.tsx**: Remotion用の構成
- **index.tsx**: エントリーポイント

## 技術スタック

- Remotion
- React
- Three.js
- @react-three/fiber
- @react-three/drei
- TypeScript
