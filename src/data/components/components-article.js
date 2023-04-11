import Image from 'next/image';
import ComponentsIllustration from '../../assets/Components-hierarchy.svg';

const COMPONENTS_ARTICLE = {
  id: 'COMPONENTS_ARTICLE',
  title: 'Composants 🧩',
  text: [
    "Les composants sont les éléments de base pour construire l'interface utilisateur. Ils sont essentiellement des morceaux de code réutilisables qui représentent une partie spécifique de l'interface utilisateur, tels que des boutons, des formulaires, des en-têtes, etc.",
    'Ils utilisent la syntaxe JSX, gèrent les données à travers les props et le state, et interagissent avec les événements et le cycle de vie pour créer des applications web dynamiques.',
  ],
  hasIllustration: true,
  IllustrationComponent: () => (
    <Image src={ComponentsIllustration} alt="Components Illustration" />
  ),
};

export default COMPONENTS_ARTICLE;
