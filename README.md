# Mini-LLM français dans Safari (WebGPU)

Objectif: entraîner un petit modèle de langage français directement sur l'iPhone, sans sideload, sans jailbreak, gratuitement, via WebGPU dans Safari.

## État du projet (honnête)
- Fait: page web, détection WebGPU, chargement du corpus, vocabulaire, déploiement GitHub Pages.
- **Pas encore fait**: les noyaux GPU d'entraînement (attention, rétropropagation, optimiseur), l'export des poids et la génération. Le bouton « Entraîner » n'entraîne donc encore rien.
- Le corpus fourni est un échantillon minuscule, uniquement pour tester. Un vrai corpus français reste à ajouter.
- Rien n'a été testé sur un iPhone.

## Utilisation
1. Dans le dépôt: Settings > Pages > Source: **GitHub Actions**.
2. Ouvrir `https://mael636.github.io/iphone-webgpu-llm-fr/` dans Safari (iOS 26 ou plus récent requis pour WebGPU).
3. Garder l'onglet ouvert et l'écran allumé pendant l'entraînement.

## Prochaines étapes
1. Noyaux WGSL: multiplication matricielle, softmax, attention causale, LayerNorm, AdamW.
2. Rétropropagation et boucle d'entraînement.
3. Corpus français plus grand préparé par GitHub Actions.
4. Sauvegarde dans IndexedDB et export des poids.
