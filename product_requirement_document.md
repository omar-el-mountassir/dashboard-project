# Product Requirement Document (PRD) - Dashboard Web Interactif

## Analyse de l'Image

L'image représente un tableau de bord (dashboard) avec un design sombre moderne, comprenant plusieurs sections distinctes et visualisations de données.

### Éléments principaux identifiés :

1. **Navigation latérale gauche**
   - Menu vertical avec icônes et texte pour : Dashboard, Reports, Archive, Social, Users, Documents, Favorites, Tools, Settings
   - Zone de recherche en bas de la navigation

2. **En-tête "Monthly Summary"**
   - Titre principal au sommet du contenu

3. **Graphique principal d'area chart**
   - Visualisation des données sur une période de 31 jours (numérotés de 1 à 31)
   - Point spécifique marqué "Monday 9 April" avec une valeur "+15%"
   - Plusieurs courbes superposées avec des tons de bleu et violet

4. **KPI circulaire**
   - Indicateur de performance affichant "+15% Avg"
   - Représenté par un graphique en anneau avec segments de différentes couleurs

5. **Légende avec indicateurs de performance**
   - "New Costumers" : +15% (violet)
   - "Sales" : -20% (couleur foncée)
   - "Refound" : -35% (bleu clair)

6. **Section "Your Orders"**
   - En-tête avec onglets : "Pending", "Completed", "Refounded"
   - Tableau contenant des commandes avec colonnes : Item, Costumer, Price, Product
   - Données pour différents téléphones mobiles (HTC, Samsung, Apple, LG, Nokia)
   - Prix en bleu ($438, $680, etc.)

7. **Graphique à barres hebdomadaire**
   - Représentation des données par jour de la semaine (MON, TUE, WED, THU, FRI, SAT, SUN)
   - Barres de différentes couleurs (bleu, violet)

8. **Section "Products"**
   - En-tête avec options "Best Sellers" et "View All"
   - 5 graphiques circulaires pour différents fabricants : HTC (450), Nokia (657), LG (1.2k), Samsung (1.8k), Apple (2.4k)
   - Chaque graphique circulaire a sa propre couleur et affiche une quantité (QTY)

9. **Graphique linéaire de performance**
   - En bas à droite avec une indication "$27,856, April 2014" et "+140%"
   - Ligne montrant une tendance à la hausse

## Fonctionnalités Identifiées

1. **Navigation latérale** - Menu de navigation vertical avec icônes et texte
2. **Graphique principal (Area Chart)** - Visualisation des tendances sur 31 jours avec points d'intérêt
3. **KPI circulaire** - Indicateur de performance global avec représentation visuelle
4. **Indicateurs de performance** - Affichage des métriques clés avec pourcentages (New Costumers, Sales, Refound)
5. **Tableau des commandes** - Liste des commandes récentes avec filtrage par statut
6. **Graphique à barres hebdomadaire** - Visualisation des performances par jour de la semaine
7. **Widgets de produits** - Graphiques circulaires affichant les quantités par fabricant
8. **Graphique de tendance** - Visualisation de l'évolution d'une métrique financière
9. **Système de recherche** - Fonctionnalité de recherche dans le dashboard

## Analyse de priorité des fonctionnalités

### Méthode MoSCoW

**Must Have (Doit avoir absolument)**
- Navigation latérale (1) - Structure fondamentale de l'interface
- Graphique principal (2) - Élément central et le plus visible du dashboard
- Tableau des commandes (5) - Données opérationnelles cruciales

**Should Have (Devrait avoir)**
- KPI circulaire (3) - Élément important pour la vision globale des performances
- Indicateurs de performance (4) - Contextualise les données pour les décideurs
- Widgets de produits (7) - Donne une vue d'ensemble de la distribution des produits

**Could Have (Pourrait avoir)**
- Graphique à barres hebdomadaire (6) - Utile mais secondaire
- Graphique de tendance (8) - Complète l'information mais non essentiel

**Won't Have (N'aura pas pour l'instant)**
- Système de recherche (9) - Peut être ajouté dans une itération future

### Méthode RICE

| # | Fonctionnalité | Reach (1-10) | Impact (0.25-3) | Confidence (0-100%) | Effort (jours) | Score RICE | Priorité |
|---|----------------|--------------|-----------------|---------------------|----------------|------------|----------|
| 1 | Navigation latérale | 10 | 1 | 100% | 1 | 10 | 2 |
| 2 | Graphique principal | 10 | 3 | 90% | 2 | 13.5 | 1 |
| 3 | KPI circulaire | 8 | 2 | 80% | 1 | 12.8 | 3 |
| 4 | Indicateurs de performance | 7 | 2 | 90% | 0.5 | 25.2 | 4 |
| 5 | Tableau des commandes | 9 | 2 | 100% | 1.5 | 12 | 5 |
| 6 | Graphique à barres hebdo | 6 | 1 | 80% | 1 | 4.8 | 7 |
| 7 | Widgets de produits | 7 | 1.5 | 90% | 1.5 | 6.3 | 6 |
| 8 | Graphique de tendance | 5 | 1 | 70% | 0.5 | 7 | 8 |
| 9 | Système de recherche | 4 | 0.5 | 50% | 1.5 | 0.67 | 9 |

**Formule RICE** : (Reach × Impact × Confidence) / Effort

### Conclusion de l'analyse

**Ordre d'implémentation final (basé sur l'analyse combinée):**
1. **Graphique principal (Area Chart)** - Élément central avec le score RICE le plus élevé
2. **Navigation latérale** - Structure fondamentale de l'application
3. **KPI circulaire** - Indicateur de performance critique
4. **Indicateurs de performance** - Complément au KPI avec un bon rapport effort/impact
5. **Tableau des commandes** - Données opérationnelles importantes
6. **Widgets de produits** - Vue d'ensemble des produits
7. **Graphique à barres hebdomadaire** - Visualisation complémentaire
8. **Graphique de tendance** - Information additionnelle
9. **Système de recherche** - Fonctionnalité avancée à implémenter plus tard

## Spécifications Techniques Proposées

### Framework et langage
- **Frontend Framework** : React avec TypeScript
- **Gestion d'état** : React Context API ou Redux (pour une application plus complexe)
- **Bibliothèque de graphiques** : Recharts (basée sur D3.js, optimisée pour React)
- **Bibliothèque UI** : Tailwind CSS pour le styling
- **Routing** : React Router pour la navigation entre les pages

### Structure de projet
```
/src
  /components
    /layout
      Sidebar.tsx
      Header.tsx
    /charts
      AreaChart.tsx
      CircularKPI.tsx
      BarChart.tsx
      ProductCircle.tsx
      TrendLine.tsx
    /tables
      OrdersTable.tsx
    /common
      Card.tsx
      StatusBadge.tsx
  /pages
    Dashboard.tsx
  /hooks
    useData.tsx
  /context
    AppContext.tsx
  /types
    index.ts
  /utils
    helpers.ts
  /styles
    index.css
```

## Directives de Design Issues de l'Image

### Palette de couleurs
- **Fond principal** : Gris très foncé (#1F2228)
- **Sidebar** : Noir bleuté (#1A1D24)
- **Texte principal** : Blanc (#FFFFFF)
- **Texte secondaire** : Gris clair (#A0A0A0)
- **Accent primaire** : Bleu (#3498DB)
- **Accent secondaire** : Violet (#9B59B6)
- **Accent tertiaire** : Vert-bleu (#2ECC71)
- **Valeurs négatives** : Rouge (#E74C3C)
- **Valeurs positives** : Vert (#2ECC71)

### Typographie
- **Font principale** : Sans-serif (probablement Inter ou SF Pro Display)
- **Taille des titres** : 18-24px
- **Taille du texte standard** : 14-16px
- **Taille du texte secondaire** : 12-14px

### Structure de layout
- Layout principal en grille avec :
  - Barre latérale fixe (220-250px de large)
  - Zone de contenu principal avec espacement de 24px
  - Cartes (cards) avec ombre légère et coins arrondis (8px)
  - Espacement vertical entre les sections de 24-32px

### Composants UI spécifiques
- **Cartes (Cards)** : Fond légèrement plus clair que le fond principal, coins arrondis
- **Tableaux** : Lignes sans bordures, alternance subtile de couleurs
- **Boutons** : Style plat avec hover en surbrillance
- **Graphiques** : Remplissage avec gradient et transparence
