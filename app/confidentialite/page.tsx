import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Donia",
  description:
    "Comment Donia (NOVEKAI LTD) collecte, utilise et protège vos données personnelles. Conformité RGPD et législation béninoise.",
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      category="Protection des données"
      title="Politique de confidentialité"
    >
      <h2>1. Notre engagement</h2>
      <p>
        NOVEKAI LTD (ci-après « Donia » ou « nous ») accorde une importance fondamentale à la
        protection de la vie privée et des données personnelles de ses utilisateurs. La présente
        Politique de confidentialité décrit comment nous collectons, utilisons, partageons et
        protégeons vos données lorsque vous utilisez le service Donia.
      </p>
      <p>
        Nous nous engageons à respecter la législation béninoise en matière de protection des données
        ainsi que le <strong>Règlement Général sur la Protection des Données (RGPD — UE 2016/679)</strong>{" "}
        pour nos utilisateurs résidant dans l&rsquo;Espace Économique Européen.
      </p>

      <h2>2. Responsable du traitement</h2>
      <div className="info-box">
        <dl>
          <dt>Dénomination</dt>
          <dd>NOVEKAI LTD</dd>
          <dt>Forme juridique</dt>
          <dd>Private company limited by shares (Royaume-Uni)</dd>
          <dt>Immatriculation</dt>
          <dd>16853666 (Companies House)</dd>
          <dt>Siège social</dt>
          <dd>Office 8922, 321-323 High Road, Chadwell Heath, Essex, RM6 6AX, Royaume-Uni</dd>
          <dt>Contact RGPD / DPO</dt>
          <dd>
            <a href="mailto:contact@doniia.com">contact@doniia.com</a>
          </dd>
        </dl>
      </div>

      <h2>3. Données collectées</h2>
      <p>Nous collectons différentes catégories de données selon votre interaction avec le Service :</p>

      <h3>3.1 Données fournies par vous</h3>
      <ul>
        <li><strong>Données d&rsquo;identification</strong> : nom, prénom, date de naissance, photo de profil.</li>
        <li><strong>Données de contact</strong> : adresse e-mail, numéro de téléphone.</li>
        <li><strong>Données de connexion</strong> : identifiant, mot de passe (stocké sous forme chiffrée).</li>
        <li><strong>Données relatives à votre profil</strong> : préférences, paramètres, message d&rsquo;accroche pour le lien anonyme.</li>
        <li><strong>Données de transaction</strong> : montants envoyés / reçus, historique des cartes.</li>
      </ul>

      <h3>3.2 Données collectées automatiquement</h3>
      <ul>
        <li><strong>Données techniques</strong> : adresse IP, type de navigateur, système d&rsquo;exploitation, identifiant de l&rsquo;appareil.</li>
        <li><strong>Données de navigation</strong> : pages visitées, dates et heures de connexion, durée des sessions.</li>
        <li><strong>Données de géolocalisation approximative</strong> : pays, région (à partir de l&rsquo;adresse IP).</li>
        <li><strong>Données liées à l&rsquo;utilisation du Service</strong> : interactions, clics, temps passé.</li>
      </ul>

      <h3>3.3 Données collectées auprès de tiers</h3>
      <ul>
        <li>Données fournies par FedaPay pour la validation des paiements et retraits.</li>
        <li>
          Données fournies par les visiteurs de votre lien anonyme : leur email et numéro de téléphone
          (si fournis), associés à votre profil dans votre <em>Cercle</em>.
        </li>
      </ul>

      <h3>3.4 Données sensibles</h3>
      <p>
        Nous ne collectons pas volontairement de données sensibles au sens du RGPD (origine raciale,
        opinions politiques, convictions religieuses, données de santé, etc.). Vous êtes invité à ne
        pas les communiquer dans vos messages, profils ou autres contenus.
      </p>

      <h2>4. Finalités du traitement</h2>
      <p>Vos données sont traitées pour les finalités suivantes :</p>
      <ul>
        <li>Permettre l&rsquo;inscription et la gestion de votre compte.</li>
        <li>Exécuter les services demandés (envoi de cartes, conversion en solde, retraits).</li>
        <li>Permettre la communication entre utilisateurs (envoi de cartes, messages anonymes, notifications).</li>
        <li>Constituer votre Cercle de contacts associés via les interactions sur votre Lien anonyme.</li>
        <li>Vous envoyer des notifications transactionnelles, informatives ou de relance (anniversaires, occasions spéciales).</li>
        <li>Mettre en œuvre les obligations légales (lutte contre la fraude, blanchiment, financement du terrorisme).</li>
        <li>Réaliser des statistiques d&rsquo;usage et améliorer le Service.</li>
        <li>Répondre à vos demandes de support.</li>
      </ul>

      <h2>5. Bases légales du traitement</h2>
      <p>Le traitement de vos données repose sur l&rsquo;une des bases légales suivantes :</p>
      <ul>
        <li>L&rsquo;exécution du contrat qui nous lie (CGU).</li>
        <li>Le respect d&rsquo;obligations légales (notamment fiscales, anti-blanchiment).</li>
        <li>
          Votre consentement explicite (pour les emails marketing, cookies non essentiels, capture
          d&rsquo;email lors de l&rsquo;envoi anonyme).
        </li>
        <li>Notre intérêt légitime (amélioration du Service, sécurité, prévention de la fraude).</li>
      </ul>

      <h2>6. Destinataires des données</h2>
      <ul>
        <li>Nos équipes internes (développement, support, modération, marketing) dans la stricte limite de leurs missions.</li>
        <li>
          Nos prestataires techniques : <strong>FedaPay</strong> (paiements), <strong>Resend</strong>{" "}
          (emails), <strong>Squarespace</strong> (hébergement web), prestataires de modération
          d&rsquo;images si applicable.
        </li>
        <li>Les autorités légalement habilitées à en obtenir communication.</li>
      </ul>
      <p>
        <strong>Nous ne vendons ni ne louons vos données à des tiers à des fins commerciales.</strong>
      </p>

      <h2>7. Durées de conservation</h2>
      <ul>
        <li><strong>Compte actif</strong> : pendant toute la durée d&rsquo;utilisation du compte.</li>
        <li>
          <strong>Compte fermé</strong> : 30 jours après demande de suppression, sauf obligations
          légales contraires (jusqu&rsquo;à 10 ans pour les données financières).
        </li>
        <li><strong>Données de transaction</strong> : 10 ans (obligation comptable et fiscale).</li>
        <li><strong>Données techniques (logs)</strong> : 12 mois.</li>
        <li>
          <strong>Données expéditeurs de messages anonymes</strong> (IP, user-agent) : 90 jours, puis
          suppression automatique.
        </li>
        <li>
          <strong>Emails de Cercle avec consentement marketing</strong> : jusqu&rsquo;à désinscription
          ou inactivité de 36 mois.
        </li>
        <li>
          <strong>Cookies</strong> : durées spécifiées dans la{" "}
          <a href="/cookies">Politique de cookies</a>.
        </li>
      </ul>

      <h2>8. Transferts hors de votre pays</h2>
      <p>
        Vos données peuvent être transférées vers des pays situés en dehors du Bénin et de
        l&rsquo;Espace Économique Européen, notamment :
      </p>
      <ul>
        <li>États-Unis : pour l&rsquo;hébergement web (Squarespace) et les notifications push.</li>
        <li>Royaume-Uni : siège de NOVEKAI LTD.</li>
        <li>Union Européenne : prestataires SaaS divers.</li>
      </ul>
      <p>
        Pour ces transferts, nous nous assurons que des garanties appropriées sont mises en place
        (clauses contractuelles types, certifications, décisions d&rsquo;adéquation).
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour assurer un
        niveau de sécurité adapté au risque, notamment :
      </p>
      <ul>
        <li>Chiffrement des données sensibles (mots de passe, données bancaires) au repos et en transit (TLS / SSL).</li>
        <li>Accès restreint aux données sur la base du besoin d&rsquo;en connaître.</li>
        <li>Authentification multi-facteurs pour les accès administrateurs.</li>
        <li>Journalisation et audit des accès.</li>
        <li>Sauvegardes régulières.</li>
        <li>Tests de sécurité périodiques.</li>
      </ul>

      <h2>10. Vos droits</h2>
      <p>Conformément à la législation applicable, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d&rsquo;accès</strong> : obtenir confirmation que vos données sont traitées, et obtenir une copie.</li>
        <li><strong>Droit de rectification</strong> : faire corriger des données inexactes ou incomplètes.</li>
        <li><strong>Droit à l&rsquo;effacement (droit à l&rsquo;oubli)</strong> : demander la suppression de vos données.</li>
        <li><strong>Droit à la limitation</strong> : demander la suspension temporaire d&rsquo;un traitement.</li>
        <li><strong>Droit d&rsquo;opposition</strong> : vous opposer à un traitement (notamment marketing).</li>
        <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible.</li>
        <li><strong>Droit de retirer votre consentement</strong> à tout moment.</li>
        <li><strong>Droit de définir des directives post-mortem.</strong></li>
        <li><strong>Droit d&rsquo;introduire une réclamation</strong> auprès d&rsquo;une autorité de contrôle.</li>
      </ul>
      <p>
        Pour exercer vos droits, contactez-nous à :{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>. Une preuve d&rsquo;identité pourra
        vous être demandée. Nous nous engageons à répondre dans un délai d&rsquo;<strong>un mois maximum</strong>.
      </p>

      <h2>11. Mineurs</h2>
      <p>
        Le Service est accessible à partir de <strong>13 ans</strong>. Les utilisateurs âgés de 13 à
        15 ans doivent obtenir le consentement de leurs représentants légaux pour créer un compte et
        utiliser le Service. Aucune donnée n&rsquo;est consciemment collectée auprès d&rsquo;enfants
        de moins de 13 ans. Si vous êtes parent et constatez que votre enfant nous a fourni des
        données, contactez-nous immédiatement pour la suppression.
      </p>

      <h2>12. Capture d&rsquo;emails sur la page anonyme</h2>
      <p>
        Lorsqu&rsquo;un visiteur écrit un message anonyme sur la page de votre Lien anonyme, il a la
        possibilité (<strong>non obligatoire</strong>) de fournir son email et numéro de téléphone.
        S&rsquo;il consent, ces coordonnées sont enregistrées dans votre Cercle et utilisées
        uniquement pour des notifications relatives à vos occasions spéciales (anniversaire). Le
        visiteur peut à tout moment se désinscrire via le lien présent dans chaque email.
      </p>

      <h2>13. Cookies</h2>
      <p>
        L&rsquo;utilisation des cookies fait l&rsquo;objet d&rsquo;une{" "}
        <a href="/cookies">Politique de cookies</a> dédiée, disponible sur doniia.com.
      </p>

      <h2>14. Modifications de la présente Politique</h2>
      <p>
        La présente Politique peut être mise à jour pour refléter des évolutions techniques, légales
        ou de nos pratiques. Toute modification substantielle vous sera notifiée par email ou via une
        notification dans l&rsquo;application.
      </p>

      <h2>15. Contact</h2>
      <ul>
        <li>
          Pour exercer vos droits ou pour toute question :{" "}
          <a href="mailto:contact@doniia.com">contact@doniia.com</a>
        </li>
        <li>
          Adresse postale : NOVEKAI LTD, Office 8922, 321-323 High Road, Chadwell Heath, Essex, RM6
          6AX, Royaume-Uni
        </li>
      </ul>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
