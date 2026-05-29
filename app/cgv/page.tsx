import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Doniia",
  description: "CGV de Doniia (NOVEKAI LTD) — vente de cartes cadeaux numériques, paiements FedaPay, retraits Mobile Money.",
};

export default function CGVPage() {
  return (
    <LegalLayout category="Vente" title="Conditions Générales de Vente">
      <h2>Article 1 — Vendeur</h2>
      <p>Les cartes cadeaux numériques proposées sur le service Doniia sont vendues par :</p>
      <ul>
        <li>
          <strong>NOVEKAI LTD</strong>, Private company limited by shares, immatriculée à Companies House
          (England and Wales) sous le numéro 16853666.
        </li>
        <li>Siège social : Office 8922, 321-323 High Road, Chadwell Heath, Essex, RM6 6AX, Royaume-Uni.</li>
        <li>DUNS : 234351363.</li>
        <li>Email : <a href="mailto:contact@doniia.app">contact@doniia.app</a>.</li>
      </ul>

      <h2>Article 2 — Champ d&rsquo;application</h2>
      <p>
        Les présentes Conditions Générales de Vente (ci-après <strong>CGV</strong>) régissent toute
        vente de carte cadeau numérique effectuée via le service Doniia (site et application). Elles
        s&rsquo;appliquent à l&rsquo;exclusion de toutes autres conditions, et complètent les{" "}
        <a href="/cgu">Conditions Générales d&rsquo;Utilisation</a> (CGU).
      </p>

      <h2>Article 3 — Produits et services proposés</h2>
      <h3>3.1 Cartes cadeaux numériques</h3>
      <p>
        Doniia propose à la vente des cartes cadeaux numériques de différents thèmes : anniversaire,
        mariage, Saint-Valentin, condoléances, « Je t&rsquo;aime », « Bonjour », et autres occasions
        disponibles dans le catalogue.
      </p>
      <p>
        Chaque carte est associée à un montant variable choisi par l&rsquo;acheteur dans les limites
        définies par le catalogue (à partir de <strong>100 FCFA</strong>).
      </p>
      <h3>3.2 Bons d&rsquo;achat partenaires</h3>
      <p>
        Doniia peut proposer également des bons d&rsquo;achat valables chez des partenaires
        commerciaux (ex. GoShop). Les conditions spécifiques d&rsquo;utilisation de ces bons sont
        détaillées au moment de l&rsquo;achat.
      </p>

      <h2>Article 4 — Prix et modalités de paiement</h2>
      <h3>4.1 Prix</h3>
      <p>
        Les prix sont affichés en <strong>francs CFA (FCFA)</strong>, toutes taxes comprises le cas
        échéant. Le prix d&rsquo;une carte correspond au montant choisi par l&rsquo;acheteur, augmenté
        le cas échéant des frais de service applicables.
      </p>
      <h3>4.2 Modalités de paiement</h3>
      <p>
        Les paiements sont effectués via le prestataire de paiement <strong>FedaPay</strong>,
        établissement de monnaie électronique agréé par la BCEAO. Les moyens de paiement acceptés
        incluent : Mobile Money (MTN, Moov, Orange Money), cartes bancaires (Visa, Mastercard), et
        solde Doniia (lorsque suffisant).
      </p>
      <p>
        Toutes les transactions sont sécurisées par le protocole SSL/TLS. Doniia n&rsquo;a pas
        connaissance des données bancaires complètes des acheteurs.
      </p>
      <h3>4.3 Frais</h3>
      <p>
        Les frais de service éventuels (frais de paiement, frais de retrait Mobile Money) sont
        indiqués avant validation de la commande. Doniia s&rsquo;engage à la transparence totale sur
        ces frais.
      </p>

      <h2>Article 5 — Commande et confirmation</h2>
      <h3>5.1 Processus de commande</h3>
      <ul>
        <li>Sélection d&rsquo;une carte dans le catalogue.</li>
        <li>Choix du montant et de la quantité.</li>
        <li>Saisie de l&rsquo;adresse email du destinataire.</li>
        <li>Personnalisation éventuelle du message.</li>
        <li>Validation et paiement.</li>
      </ul>
      <h3>5.2 Confirmation</h3>
      <p>
        Une fois le paiement validé, un email de confirmation est envoyé à l&rsquo;acheteur. Le
        destinataire reçoit simultanément un email contenant un lien sécurisé pour réclamer sa carte.
      </p>

      <h2>Article 6 — Livraison</h2>
      <p>
        La livraison est exclusivement numérique. Elle s&rsquo;effectue par l&rsquo;envoi d&rsquo;un
        email au destinataire indiqué par l&rsquo;acheteur. L&rsquo;email est envoyé dans un délai
        indicatif de quelques minutes après validation du paiement.
      </p>
      <p>
        Doniia ne peut être tenue responsable d&rsquo;un retard ou d&rsquo;une non-réception lié à une
        adresse e-mail erronée saisie par l&rsquo;acheteur, ou à un classement de l&rsquo;email dans
        les spams du destinataire.
      </p>

      <h2>Article 7 — Réception, conversion et utilisation</h2>
      <h3>7.1 Réception et activation</h3>
      <p>
        Le destinataire active sa carte en cliquant sur le lien reçu par email puis en suivant les
        instructions (connexion ou création de compte Doniia).
      </p>
      <h3>7.2 Conversion en solde</h3>
      <p>
        La carte reçue peut être convertie <strong>gratuitement</strong> en solde monétaire (FCFA)
        sur le compte Doniia du destinataire.
      </p>
      <h3>7.3 Retrait du solde</h3>
      <p>
        Le solde peut être retiré vers un compte Mobile Money via FedaPay. Des frais de retrait,
        reflétant uniquement les frais facturés par FedaPay, peuvent s&rsquo;appliquer ; ils sont
        indiqués avant validation.
      </p>

      <h2>Article 8 — Droit de rétractation</h2>
      <p>
        Conformément aux dispositions légales applicables, le droit de rétractation prévu pour la
        vente à distance ne s&rsquo;applique pas aux contenus numériques fournis sur un support
        immatériel dont l&rsquo;exécution a commencé avec l&rsquo;accord préalable du consommateur et
        la renonciation expresse à son droit de rétractation.
      </p>
      <p>
        En passant commande, l&rsquo;acheteur reconnaît expressément que la fourniture du contenu
        numérique (envoi de la carte au destinataire) commence dès la confirmation du paiement, et
        renonce ainsi à son droit de rétractation.
      </p>

      <h2>Article 9 — Validité et expiration des cartes</h2>
      <p>
        Les cartes cadeaux Doniia sont valables <strong>24 mois</strong> à compter de leur date
        d&rsquo;achat. Au-delà de ce délai, une carte non réclamée ou non convertie pourra être
        désactivée, sans donner droit à remboursement.
      </p>
      <p>
        Avant expiration, Doniia s&rsquo;engage à envoyer des notifications de rappel au destinataire
        indiqué.
      </p>

      <h2>Article 10 — Remboursement et réclamations</h2>
      <h3>10.1 Cas de remboursement</h3>
      <p>Un remboursement peut être accordé dans les cas suivants :</p>
      <ul>
        <li>Erreur technique imputable à Doniia.</li>
        <li>Double paiement.</li>
        <li>Impossibilité totale de livraison persistante.</li>
      </ul>
      <p>
        La demande doit être formulée dans un délai de <strong>30 jours</strong> après l&rsquo;achat,
        à <a href="mailto:contact@doniia.app">contact@doniia.app</a>, accompagnée des justificatifs
        (email de confirmation, capture d&rsquo;écran, etc.).
      </p>
      <h3>10.2 Cas d&rsquo;exclusion</h3>
      <p>Aucun remboursement ne peut être accordé dans les cas suivants :</p>
      <ul>
        <li>Utilisation effective de la carte par le destinataire.</li>
        <li>Expiration de la carte.</li>
        <li>Suspicion de fraude.</li>
        <li>Utilisation non conforme aux CGU.</li>
      </ul>

      <h2>Article 11 — Garanties et responsabilité</h2>
      <p>
        Doniia s&rsquo;engage à fournir un service conforme à la description faite dans le catalogue.
        La responsabilité de NOVEKAI LTD se limite à la valeur nominale de la carte achetée.
      </p>
      <p>
        NOVEKAI LTD ne peut être tenue responsable des dommages indirects (perte d&rsquo;opportunité,
        préjudice moral, etc.) liés à l&rsquo;utilisation des cartes Doniia.
      </p>

      <h2>Article 12 — Lutte contre la fraude</h2>
      <p>
        Toute tentative de fraude (utilisation frauduleuse d&rsquo;un moyen de paiement,
        multiplication de comptes pour contourner les limites, retrait massif suspect, etc.) entraîne
        la suspension immédiate du compte et peut donner lieu à des poursuites légales. Les sommes en
        cause peuvent être bloquées ou restituées aux victimes.
      </p>

      <h2>Article 13 — Données personnelles</h2>
      <p>
        Les données collectées dans le cadre d&rsquo;une commande (identité, email du destinataire,
        données de paiement) sont traitées conformément à la{" "}
        <a href="/confidentialite">Politique de confidentialité</a> disponible sur doniia.com.
      </p>

      <h2>Article 14 — Modifications des CGV</h2>
      <p>
        NOVEKAI LTD se réserve le droit de modifier les présentes CGV à tout moment. Les CGV
        applicables sont celles en vigueur au moment de la commande.
      </p>

      <h2>Article 15 — Loi applicable et juridiction</h2>
      <p>
        Les présentes CGV sont régies par le droit béninois. Tout litige relatif à leur
        interprétation ou exécution sera soumis à la compétence exclusive du Tribunal de Commerce de
        Cotonou, République du Bénin.
      </p>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
