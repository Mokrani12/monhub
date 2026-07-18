# MonHub — Business model (100% gratuit, sans store)

Site web + app installable (PWA / APK) combinant :
- une **bio-link** monétisée par affiliation
- des **outils gratuits** pour attirer du trafic
- une **section Premium** payante (codes d'accès)

## Flux de revenus
1. **Affiliation** : liens Amazon, Skillshare, Booking, AliExpress, TopCashback
   → remplacez les URLs dans `assets/links.js` par vos liens trackés.
2. **Premium** : vente de codes d'accès (ex. 5-10 €)
   → générez des codes sur `tools/codegen.html`
   → l'acheteur paie via PayPal (`premium.html`) et saisit son code sur `premium.html`.
3. **Publicité (optionnel)** : AdSense, à activer dans `index.html`.

## Pages
- `index.html` — bio-link + outils gratuits + lien Premium
- `premium.html` — zone réservée + bouton PayPal + instructions
- `thanks.html` — confirmation après paiement
- `tools/` — biolink, caption, password, qrcode, budget, username (gratuits)
- `tools/analyzer.html`, `tools/planner.html` — outils Premium
- `tools/codegen.html` — générateur de codes (pour le vendeur)

## Déploiement
- Hébergé sur GitHub Pages : https://mokrani12.github.io/monhub/
- PWA installable : "Ajouter à l'écran d'accueil" sur mobile.

## APK Android (local, sans store)
Projet dans `C:\Users\mokra\monhub-app\` :
1. Installez Android Studio (gratuit)
2. Double-cliquez `build-apk.bat`
3. APK dans `app\build\outputs\apk\debug\app-debug.apk`

## À personnaliser
- `assets/links.js` → vos IDs d'affiliation
- `premium.html` → `paypal.me/votrecompte` → votre compte
- `assets/premium.js` → codes fixes dans `PREMIUM_CODES`

## Note sur les stores
Google Play (25 $) et Apple App Store (99 $/an) exigent un compte
développeur payant. Sans cela, distribuez l'APK / la PWA via votre lien.
