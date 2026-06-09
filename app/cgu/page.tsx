import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Donia",
  description: "CGU du service Donia opéré par NOVEKAI LTD. Règles d'usage de l'application et du site.",
};

export default function CGUPage() {
  return (
    <LegalLayout category="Règles d'usage" title="Conditions Générales d'Utilisation">
      <h2>Préambule</h2>
      <p>
        Les présentes Conditions Générales d&rsquo;Utilisation (ci-après les <strong>CGU</strong>)
        régissent l&rsquo;utilisation du service Donia, édité par la société NOVEKAI LTD, ainsi que de
        tous ses prolongements (site web, application mobile, messages anonymes, programme de
        parrainage, fonctionnalité Fêtes, etc.).
      </p>
      <p>
        En créant un compte ou en utilisant le Service de quelque manière que ce soit,
        l&rsquo;Utilisateur reconnaît avoir lu, compris et accepté sans réserve les présentes CGU.
      </p>

      <h2>Article 1 — Définitions</h2>
      <ul>
        <li>
          <strong>Service</strong> : l&rsquo;ensemble des fonctionnalités accessibles via le site
          doniia.com et l&rsquo;application mobile Donia.
        </li>
        <li>
          <strong>Éditeur</strong> : la société NOVEKAI LTD, éditrice et exploitante du Service.
        </li>
        <li>
          <strong>Utilisateur</strong> : toute personne physique disposant d&rsquo;un compte Donia.
        </li>
        <li>
          <strong>Visiteur</strong> : toute personne accédant au site sans nécessairement disposer
          d&rsquo;un compte.
        </li>
        <li>
          <strong>Carte</strong> : une carte cadeau numérique achetée et envoyée via Donia.
        </li>
        <li>
          <strong>Solde</strong> : montant en FCFA disponible sur le compte de l&rsquo;Utilisateur,
          issu des Cartes reçues converties.
        </li>
        <li>
          <strong>Lien anonyme</strong> : URL unique générée par un Utilisateur lui permettant de
          recevoir des messages anonymes.
        </li>
        <li>
          <strong>Cercle</strong> : ensemble des contacts associés à un Utilisateur via les
          interactions sur son Lien anonyme.
        </li>
        <li>
          <strong>FedaPay</strong> : prestataire de services de paiement utilisé pour les transactions
          monétaires.
        </li>
      </ul>

      <h2>Article 2 — Objet</h2>
      <p>
        Donia est un service de partage de cartes cadeaux numériques permettant aux Utilisateurs :
        d&rsquo;acheter et d&rsquo;envoyer des cartes à des proches via e-mail, d&rsquo;en recevoir et
        de les convertir en solde monétaire, de retirer ce solde via Mobile Money, de recevoir des
        messages anonymes via un Lien anonyme partageable, et de découvrir les utilisateurs en fête
        (anniversaires) pour leur offrir une carte.
      </p>

      <h2>Article 3 — Acceptation et modifications des CGU</h2>
      <p>
        L&rsquo;acceptation des CGU est matérialisée par la création d&rsquo;un compte ou
        l&rsquo;utilisation du Service. Les CGU peuvent être modifiées à tout moment par NOVEKAI LTD.
        Les utilisateurs sont informés des modifications par notification dans l&rsquo;application, par
        email, ou par un avis publié sur doniia.com. La poursuite de l&rsquo;utilisation du Service
        après modification vaut acceptation des nouvelles CGU.
      </p>

      <h2>Article 4 — Inscription et compte Utilisateur</h2>
      <h3>4.1 Conditions d&rsquo;inscription</h3>
      <ul>
        <li>Être âgé d&rsquo;au moins 13 ans (avec consentement parental pour les mineurs).</li>
        <li>Disposer d&rsquo;une adresse e-mail valide.</li>
        <li>Fournir des informations exactes, complètes et à jour.</li>
      </ul>
      <h3>4.2 Sécurité du compte</h3>
      <ul>
        <li>L&rsquo;Utilisateur est responsable de la confidentialité de ses identifiants.</li>
        <li>Toute connexion via les identifiants de l&rsquo;Utilisateur est réputée effectuée par lui.</li>
        <li>
          L&rsquo;Utilisateur s&rsquo;engage à signaler immédiatement toute utilisation non autorisée à{" "}
          <a href="mailto:contact@doniia.com">contact@doniia.com</a>.
        </li>
      </ul>

      <h2>Article 5 — Services proposés</h2>
      <h3>5.1 Cartes cadeaux</h3>
      <p>
        L&rsquo;Utilisateur peut acheter des cartes cadeaux dans le catalogue Donia et les envoyer à
        un destinataire identifié par son adresse e-mail. Le destinataire peut convertir la carte en
        solde monétaire (FCFA), puis retirer ce solde via Mobile Money par l&rsquo;intermédiaire de
        FedaPay.
      </p>
      <h3>5.2 Messages anonymes</h3>
      <p>
        L&rsquo;Utilisateur peut générer un Lien anonyme partageable sur les réseaux sociaux. Les
        Visiteurs peuvent lui envoyer des messages anonymes via la page dédiée sur doniia.com.
        L&rsquo;identité du Visiteur est masquée auprès de l&rsquo;Utilisateur destinataire mais
        traçable techniquement par l&rsquo;Éditeur à des fins de modération.
      </p>
      <h3>5.3 Fonctionnalité Fêtes</h3>
      <p>
        La fonctionnalité Fêtes affiche les Utilisateurs dont l&rsquo;anniversaire est aujourd&rsquo;hui,
        demain ou après-demain, permettant à la communauté de leur offrir une carte. La visibilité est
        contrôlée par les paramètres de chaque Utilisateur (opt-out possible à tout moment).
      </p>
      <h3>5.4 Parrainage</h3>
      <p>
        Les Utilisateurs peuvent parrainer leurs proches via un code unique, en accord avec le{" "}
        <a href="/reglement-parrainage">Règlement du programme de parrainage</a> Donia disponible
        séparément.
      </p>

      <h2>Article 6 — Obligations et responsabilités de l&rsquo;Utilisateur</h2>
      <p>
        L&rsquo;Utilisateur s&rsquo;engage à utiliser le Service de bonne foi et conformément aux lois
        en vigueur. Il s&rsquo;interdit notamment :
      </p>
      <ul>
        <li>De faire usage du Service à des fins illicites, frauduleuses ou portant atteinte aux droits de tiers.</li>
        <li>
          De diffuser des contenus haineux, diffamatoires, racistes, sexistes, violents, pornographiques,
          menaçants, harcelants ou contraires aux bonnes mœurs.
        </li>
        <li>D&rsquo;usurper l&rsquo;identité d&rsquo;un tiers ou de créer plusieurs comptes.</li>
        <li>
          D&rsquo;utiliser le Service pour effectuer du blanchiment, du transfert d&rsquo;argent
          illicite, du financement du terrorisme.
        </li>
        <li>De tenter d&rsquo;accéder à des fonctionnalités administratives ou de contourner les mesures de sécurité.</li>
        <li>De collecter automatiquement les données d&rsquo;autres Utilisateurs (scraping).</li>
        <li>D&rsquo;introduire des virus, logiciels malveillants ou tout code informatique nuisible.</li>
        <li>De faire un usage commercial non autorisé du Service.</li>
      </ul>

      <h2>Article 7 — Modération</h2>
      <p>
        Donia applique une politique de modération active : les messages anonymes, les photos de
        profil et tout contenu publié sur le Service peuvent être analysés par des outils automatisés
        et examinés par l&rsquo;équipe de modération. Les règles détaillées figurent dans la{" "}
        <a href="/charte-moderation">Charte de modération Donia</a>.
      </p>
      <p>
        Tout contenu jugé contraire aux CGU ou à la Charte de modération pourra être supprimé sans
        préavis, et le compte associé pourra être suspendu ou supprimé.
      </p>

      <h2>Article 8 — Paiements et solde</h2>
      <h3>8.1 Paiements</h3>
      <p>
        Les paiements pour l&rsquo;achat de cartes sont effectués via FedaPay. Donia ne stocke
        aucune donnée bancaire complète. Les paiements sont sécurisés par les protocoles de FedaPay.
      </p>
      <h3>8.2 Solde et retraits</h3>
      <p>
        Le solde de l&rsquo;Utilisateur représente la valeur cumulée des Cartes reçues et converties.
        Le retrait du solde se fait via Mobile Money, dans la limite des frais et délais appliqués par
        FedaPay.
      </p>
      <p>
        Le solde n&rsquo;est pas rémunéré, ne porte pas intérêt et ne constitue pas un dépôt bancaire
        au sens réglementaire. Donia agit comme intermédiaire technique, FedaPay étant
        l&rsquo;établissement de monnaie électronique agréé pour les opérations financières.
      </p>

      <h2>Article 9 — Suspension et résiliation</h2>
      <h3>9.1 Résiliation par l&rsquo;Utilisateur</h3>
      <p>
        L&rsquo;Utilisateur peut à tout moment supprimer son compte depuis l&rsquo;application ou par
        demande écrite à <a href="mailto:contact@doniia.com">contact@doniia.com</a>. La suppression
        entraîne l&rsquo;effacement de ses données personnelles dans les délais prévus par la{" "}
        <a href="/confidentialite">Politique de confidentialité</a>. Le solde non utilisé pourra être
        retiré avant la suppression.
      </p>
      <h3>9.2 Suspension ou résiliation par NOVEKAI LTD</h3>
      <p>
        Donia se réserve le droit de suspendre ou de supprimer un compte en cas de manquement grave
        aux CGU, de comportement frauduleux, d&rsquo;inactivité prolongée, ou pour toute raison
        sérieuse et légitime, sans préavis si la gravité l&rsquo;exige.
      </p>

      <h2>Article 10 — Propriété intellectuelle</h2>
      <p>
        L&rsquo;ensemble des éléments du Service (textes, logos, designs, codes, etc.) appartient à
        NOVEKAI LTD. L&rsquo;Utilisateur ne dispose que d&rsquo;un droit d&rsquo;usage personnel et
        non transférable du Service. Les contenus générés par l&rsquo;Utilisateur restent sa
        propriété, mais il accorde à NOVEKAI LTD une licence non exclusive et gratuite
        d&rsquo;utilisation à des fins de fonctionnement du Service.
      </p>

      <h2>Article 11 — Données personnelles</h2>
      <p>
        Le traitement des données personnelles est détaillé dans la{" "}
        <a href="/confidentialite">Politique de confidentialité</a> disponible sur doniia.com.
        L&rsquo;Utilisateur dispose des droits d&rsquo;accès, de rectification, de suppression,
        d&rsquo;opposition et de portabilité sur ses données, qu&rsquo;il peut exercer en écrivant à{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>.
      </p>

      <h2>Article 12 — Responsabilité</h2>
      <p>
        Donia s&rsquo;engage à fournir le Service avec diligence et selon les règles de
        l&rsquo;art. Toutefois, NOVEKAI LTD ne peut être tenue responsable des dommages indirects
        (perte de données, perte d&rsquo;opportunité, préjudice moral, etc.) liés à l&rsquo;utilisation
        du Service, sauf cas de faute lourde ou intentionnelle.
      </p>
      <p>
        Donia ne garantit pas l&rsquo;absence d&rsquo;interruption ou d&rsquo;erreur du Service. En
        cas d&rsquo;indisponibilité, l&rsquo;Éditeur s&rsquo;efforce de rétablir le Service dans les
        meilleurs délais.
      </p>

      <h2>Article 13 — Loi applicable et juridiction</h2>
      <p>
        Les présentes CGU sont régies par le droit béninois. Tout litige relatif à leur
        interprétation, validité ou exécution sera soumis à la compétence exclusive du Tribunal de
        Commerce de Cotonou, République du Bénin.
      </p>
      <p>
        L&rsquo;Utilisateur consommateur européen peut, conformément au droit européen, bénéficier de
        la protection des dispositions impératives de son pays de résidence.
      </p>

      <h2>Article 14 — Contact</h2>
      <p>
        Toute question relative aux CGU peut être adressée à :{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>.
      </p>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
