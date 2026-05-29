import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Charte de modération — Doniia",
  description:
    "Règles de comportement attendues sur Doniia, contenus interdits, processus de modération, sanctions et recours.",
};

export default function ChartePage() {
  return (
    <LegalLayout category="Communauté" title="Charte de modération">
      <h2>Préambule</h2>
      <p>
        Doniia est une plateforme dédiée à l&rsquo;amour, au don et au partage. Pour que cet espace
        reste un lieu sûr, bienveillant et respectueux pour tous, NOVEKAI LTD met en place une
        politique de modération rigoureuse. La présente Charte définit les règles de comportement
        attendues, les contenus interdits, les processus de modération et les sanctions applicables.
      </p>
      <p>
        Cette Charte s&rsquo;applique à <strong>tous les utilisateurs</strong> et à{" "}
        <strong>tous les contenus</strong> diffusés sur Doniia : messages anonymes, profils, photos,
        cartes personnalisées, commentaires, signalements, etc.
      </p>

      <h2>1. Principes fondamentaux</h2>
      <ul>
        <li>Respect de la dignité humaine.</li>
        <li>Respect des lois en vigueur.</li>
        <li>Bienveillance et empathie.</li>
        <li>Authenticité des profils.</li>
        <li>Protection des plus vulnérables (notamment les mineurs).</li>
      </ul>

      <h2>2. Contenus et comportements strictement interdits</h2>
      <p>
        Les contenus et comportements suivants sont strictement interdits sur Doniia et entraînent
        une suppression immédiate et une sanction du compte :
      </p>

      <h3>2.1 Atteintes à la personne</h3>
      <ul>
        <li>
          Discours de haine fondés sur l&rsquo;origine, la race, l&rsquo;ethnie, la religion, le
          genre, l&rsquo;orientation sexuelle, le handicap, la santé, l&rsquo;apparence physique.
        </li>
        <li>Harcèlement, menaces, intimidation, cyberharcèlement.</li>
        <li>Diffamation, calomnie, atteinte à l&rsquo;honneur ou à la réputation.</li>
        <li>
          Atteinte à la vie privée (divulgation d&rsquo;informations personnelles d&rsquo;autrui sans
          consentement, doxxing).
        </li>
        <li>Incitation à la violence, au suicide, à l&rsquo;automutilation.</li>
      </ul>

      <h3>2.2 Contenus à caractère sexuel</h3>
      <ul>
        <li>
          Toute représentation pornographique, érotique explicite ou sexualisation d&rsquo;autrui
          sans consentement.
        </li>
        <li>Sollicitation sexuelle, notamment envers des mineurs.</li>
        <li>Diffusion d&rsquo;images intimes sans consentement (<em>revenge porn</em>).</li>
      </ul>

      <h3>2.3 Atteinte aux mineurs</h3>
      <ul>
        <li>Tout contenu mettant en scène des mineurs de manière inappropriée.</li>
        <li>Tentative de contact à caractère sexuel ou prédateur envers un mineur.</li>
        <li>Exploitation de l&rsquo;image d&rsquo;un mineur sans autorisation parentale.</li>
      </ul>

      <h3>2.4 Activités illégales</h3>
      <ul>
        <li>
          Promotion ou facilitation d&rsquo;activités illégales (vente de drogue, armes, contenus
          illégaux, traite d&rsquo;êtres humains).
        </li>
        <li>Escroquerie, phishing, tentatives d&rsquo;arnaque.</li>
        <li>Blanchiment d&rsquo;argent, financement du terrorisme.</li>
        <li>Atteinte à la propriété intellectuelle d&rsquo;autrui (contrefaçons, plagiat).</li>
      </ul>

      <h3>2.5 Comportements manipulateurs</h3>
      <ul>
        <li>Création de faux profils, usurpation d&rsquo;identité.</li>
        <li>Comptes multiples utilisés pour contourner les règles ou les sanctions.</li>
        <li>Spam, publicité non sollicitée, démarchage commercial non autorisé.</li>
        <li>Manipulation des fonctionnalités (faux signalements pour nuire à autrui).</li>
      </ul>

      <h3>2.6 Atteintes à la sécurité technique</h3>
      <ul>
        <li>Tentatives de piratage, exploitation de failles, contournement des mesures de sécurité.</li>
        <li>Diffusion de virus, malwares, liens malveillants.</li>
        <li>Collecte automatisée de données (scraping) ou utilisation de bots.</li>
      </ul>

      <h2>3. Cas spécifique : messages anonymes</h2>
      <p>
        La fonctionnalité <strong>Anonymes</strong> permet aux visiteurs d&rsquo;envoyer des messages
        anonymes à un utilisateur Doniia. L&rsquo;anonymat ne donne aucun droit d&rsquo;écarter les
        règles de cette Charte. Tout message anonyme reste soumis à modération.
      </p>
      <ul>
        <li>Les messages anonymes sont analysés automatiquement avant livraison.</li>
        <li>
          Les messages contenant des éléments problématiques sont automatiquement masqués et envoyés
          en modération manuelle.
        </li>
        <li>Le destinataire peut signaler tout message qu&rsquo;il juge inapproprié.</li>
        <li>
          L&rsquo;identité des expéditeurs anonymes est traçable techniquement (IP, user-agent),
          conservée <strong>90 jours</strong>, et peut être communiquée aux autorités légales sur
          requête judiciaire en cas de menace, harcèlement caractérisé ou autre infraction grave.
        </li>
      </ul>

      <h2>4. Modération des photos de profil</h2>
      <p>Toutes les photos de profil sont modérées avant publication :</p>
      <ul>
        <li>Filtrage automatique via des services spécialisés (détection de nudité, violence, contenus haineux).</li>
        <li>Photos douteuses examinées manuellement.</li>
        <li>Photos refusées signalées à l&rsquo;utilisateur avec une explication.</li>
        <li>Possibilité de signalement d&rsquo;une photo par d&rsquo;autres utilisateurs.</li>
      </ul>

      <h2>5. Processus de modération</h2>
      <h3>5.1 Modération automatique</h3>
      <p>
        Doniia utilise des outils d&rsquo;analyse automatique (filtres de mots, classifieurs IA,
        détection d&rsquo;images) pour filtrer en temps réel les contenus problématiques. La précision
        de ces outils est continuellement améliorée.
      </p>
      <h3>5.2 Modération humaine</h3>
      <p>
        Une équipe de modération humaine intervient pour : examiner les contenus signalés, traiter
        les cas complexes ou ambigus, statuer sur les recours.
      </p>
      <h3>5.3 Signalement par les utilisateurs</h3>
      <p>
        Chaque utilisateur peut signaler un contenu ou un comportement qu&rsquo;il juge inapproprié.
        Le signalement est traité dans les meilleurs délais, en général sous <strong>48 heures</strong>.
      </p>

      <h2>6. Sanctions</h2>
      <h3>6.1 Échelle des sanctions</h3>
      <ul>
        <li><strong>Avertissement</strong> : pour un manquement mineur ou un premier écart.</li>
        <li><strong>Suppression du contenu</strong> : retrait du message, de la photo, du commentaire.</li>
        <li>
          <strong>Limitation temporaire</strong> : impossibilité de créer des liens anonymes,
          d&rsquo;envoyer des messages, pour une durée déterminée.
        </li>
        <li><strong>Suspension du compte</strong> : suspension temporaire (7 à 30 jours).</li>
        <li><strong>Suppression du compte</strong> : pour les cas graves ou récidives.</li>
        <li>
          <strong>Plainte et coordination avec les autorités</strong> : pour les infractions graves
          (menaces caractérisées, atteintes aux mineurs, escroquerie, etc.).
        </li>
      </ul>
      <h3>6.2 Critères d&rsquo;application</h3>
      <p>
        La sanction est déterminée selon la gravité du manquement, son caractère intentionnel,
        l&rsquo;existence d&rsquo;antécédents, et l&rsquo;impact sur d&rsquo;autres utilisateurs.
      </p>

      <h2>7. Droit de recours</h2>
      <p>
        Un utilisateur sanctionné peut contester la décision en écrivant à{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a> dans un délai de{" "}
        <strong>30 jours</strong>, en expliquant les raisons de sa contestation. Doniia s&rsquo;engage
        à examiner la demande dans un délai de <strong>14 jours</strong> et à motiver sa réponse.
      </p>

      <h2>8. Transparence et amélioration continue</h2>
      <p>
        Doniia publie régulièrement des rapports de transparence (nombre de signalements, contenus
        modérés, sanctions appliquées) afin d&rsquo;informer la communauté sur l&rsquo;application de
        cette Charte.
      </p>
      <p>
        Les utilisateurs sont encouragés à partager leurs retours et suggestions à{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a> pour améliorer continuellement la
        modération.
      </p>

      <h2>9. Responsabilité des contenus</h2>
      <p>
        Chaque utilisateur reste responsable des contenus qu&rsquo;il publie sur Doniia. NOVEKAI LTD
        n&rsquo;est pas l&rsquo;auteur des contenus générés par les utilisateurs et agit en tant
        qu&rsquo;<strong>hébergeur</strong> au sens des réglementations applicables.
      </p>

      <h2>10. Modifications de la Charte</h2>
      <p>
        La présente Charte peut être modifiée pour s&rsquo;adapter à l&rsquo;évolution du Service,
        des comportements utilisateurs et de la législation. Les utilisateurs seront informés de
        toute modification substantielle par notification dans l&rsquo;application ou par email.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour tout signalement, recours ou question relative à cette Charte :{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>
      </p>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
