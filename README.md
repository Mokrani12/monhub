# MonHub — Projet générateur de revenus (100% gratuit)

Un site statique (HTML/CSS/JS, zéro dépendance) qui combine :
- une **bio-link** (page de liens avec liens d'affiliation),
- des **outils gratuits** pour attirer du trafic (générateurs).

Aucun achat, aucun serveur, aucun abonnement requis.

## Structure
```
monhub/
├── index.html            # page principale (bio-link)
├── assets/
│   ├── style.css
│   ├── links.js          # ← vos liens d'affiliation (À MODIFIER)
│   ├── app.js
│   └── avatar.svg
├── tools/
│   ├── biolink.html      # générateur de bio-link
│   ├── caption.html      # générateur de captions
│   └── password.html     # générateur de mots de passe
└── README.md
```

## 1. Héberger GRATUITEMENT (sans acheter)

### Option A — GitHub Pages (recommandé, gratuit)
1. Créez un compte sur https://github.com (gratuit).
2. Créez un dépôt public nommé `monhub`.
3. Uploadez tout le dossier `monhub/` dedans.
4. Réglages (Settings) → Pages → Source : `main` / `/root`.
5. Votre site sera en ligne sur `https://VOTRE_USER.github.io/monhub/`.

### Option B — Netlify Drop (encore plus simple)
1. Allez sur https://app.netlify.com/drop (gratuit).
2. Glissez le dossier `monhub/` dans la fenêtre.
3. Votre site est en ligne instantanément avec une URL gratuite.

## 2. Monétiser (sans investir)
- **Liens d'affiliation** : modifiez `assets/links.js` et remplacez les URLs par vos
  propres IDs d'affiliation (Amazon Partners, Skillshare, Booking, etc.). Gratuit à rejoindre.
- **Google AdSense** : dans `index.html`, décommentez le bloc AdSense et mettez votre
  ID `ca-pub-...` (compte AdSense gratuit, à demander après un peu de trafic).
- **Tips** : ko-fi / PayPal.me (gratuit).
- **Trafic** : partagez vos outils gratuits sur réseaux, forums, Reddit, pour
  amener des visiteurs qui cliqueront sur vos liens.

## 3. Personnaliser
- `assets/links.js` → vos liens et affiliations.
- `index.html` → nom, bio, suppression du bloc AdSense commenté si non utilisé.
- `assets/style.css` → couleurs (variables `:root`).

## Prochaines étapes suggérées (gratuites)
- Ajouter un formulaire de capture d'email (ex: Mailchimp gratuit jusqu'à 500 contacts).
- Ajouter plus d'outils pour attirer du trafic.
- Soumettre le site sur les annuaires gratuits.
