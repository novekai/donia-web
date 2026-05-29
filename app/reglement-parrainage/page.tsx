import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Règlement du programme de parrainage — Doniia",
  description: "Programme « Gagnez 1 % à vie » : conditions, mécanisme, récompenses, mécanismes anti-fraude.",
};

export default function ReglementParrainagePage() {
  return (
    <LegalLayout
      category="Récompenses"
      title="Règlement du programme de parrainage"
    >
      <h2>Préambule</h2>
      <p>
        Le programme de parrainage Doniia récompense les utilisateurs qui font connaître le Service à
        leurs proches. Le présent Règlement décrit les conditions, le mécanisme, les récompenses, et
        les règles applicables au programme « <strong>Gagnez 1 % à vie</strong> ».
      </p>

      <h2>Article 1 — Organisateur</h2>
      <p>
        Le programme de parrainage est organisé par <strong>NOVEKAI LTD</strong>, éditrice du service
        Doniia, immatriculée à Companies House sous le numéro 16853666.
      </p>

      <h2>Article 2 — Conditions de participation</h2>
      <h3>2.1 Le parrain</h3>
      <ul>
        <li>Être titulaire d&rsquo;un compte Doniia actif et conforme aux <a href="/cgu">CGU</a>.</li>
        <li>
          Être âgé d&rsquo;au moins 18 ans pour percevoir des récompenses (les mineurs peuvent
          parrainer mais les sommes sont créditées sur le compte du représentant légal).
        </li>
        <li>Disposer d&rsquo;un code de parrainage personnel attribué automatiquement par Doniia.</li>
      </ul>
      <h3>2.2 Le filleul</h3>
      <ul>
        <li>Être une nouvelle personne, n&rsquo;ayant jamais créé de compte Doniia.</li>
        <li>Utiliser le code de parrainage du parrain lors de l&rsquo;inscription ou de la première transaction.</li>
        <li>Réaliser une première transaction validée (achat de carte).</li>
      </ul>

      <h2>Article 3 — Mécanisme du programme</h2>
      <h3>3.1 Récompense de bienvenue (optionnelle)</h3>
      <p>
        Lors de la première transaction du filleul, un bonus de bienvenue de <strong>500 FCFA</strong>{" "}
        peut être crédité sur le compte du parrain, dans les conditions définies au moment de
        l&rsquo;inscription du filleul. Cette récompense peut être temporairement suspendue ou
        modifiée par Doniia, sans constituer un droit acquis.
      </p>
      <h3>3.2 Récompense à vie : 1 % de commission</h3>
      <p>
        Le parrain perçoit <strong>1 % de chaque transaction</strong> effectuée par chacun de ses
        filleuls, et ce <strong>à vie</strong> tant que le programme reste en vigueur. Cette
        commission est calculée sur le montant brut de la carte achetée par le filleul, hors frais de
        paiement.
      </p>
      <h3>3.3 Cumul</h3>
      <p>
        Il n&rsquo;y a pas de plafond au nombre de filleuls par parrain. Un même utilisateur peut
        être à la fois parrain de plusieurs personnes et filleul d&rsquo;une autre.
      </p>

      <h2>Article 4 — Versement des récompenses</h2>
      <h3>4.1 Créditation</h3>
      <p>
        Les récompenses sont automatiquement créditées sur le solde Doniia du parrain dans un délai
        de <strong>24 à 72 heures</strong> après validation de la transaction du filleul.
      </p>
      <h3>4.2 Utilisation des récompenses</h3>
      <ul>
        <li>Achat de cartes cadeaux sur Doniia (sans frais supplémentaires).</li>
        <li>Retrait via Mobile Money grâce à FedaPay (frais de retrait habituels).</li>
      </ul>
      <h3>4.3 Suivi</h3>
      <p>
        Le parrain peut consulter à tout moment ses statistiques de parrainage : nombre de filleuls
        actifs, montant cumulé des récompenses, montant prêt à retirer, depuis la rubrique
        « Parrainage » de son compte.
      </p>

      <h2>Article 5 — Mécanisme anti-fraude</h2>
      <h3>5.1 Détection</h3>
      <p>
        Doniia met en œuvre des mécanismes automatiques de détection des fraudes : création de
        comptes multiples par une même personne, utilisation de moyens de paiement identiques,
        comportements suspects de transaction, géographies improbables, etc.
      </p>
      <h3>5.2 Sanctions</h3>
      <p>
        Toute fraude avérée entraîne : l&rsquo;annulation des récompenses litigieuses, la suspension
        du compte du parrain, et le cas échéant le signalement aux autorités compétentes. Les sommes
        récoltées frauduleusement seront restituées.
      </p>

      <h2>Article 6 — Cas particuliers et exclusions</h2>
      <ul>
        <li>
          Si un filleul demande le remboursement de sa carte, les commissions correspondantes sont
          automatiquement déduites du solde du parrain.
        </li>
        <li>
          Si un filleul ferme son compte, les commissions déjà générées sont conservées mais aucune
          nouvelle commission ne sera générée.
        </li>
        <li>
          Les transactions effectuées avec le solde issu du parrainage génèrent de nouvelles
          commissions selon les mêmes règles.
        </li>
        <li>
          Les bons d&rsquo;achat partenaires peuvent être exclus du calcul des commissions selon les
          accords commerciaux ; le cas est précisé au moment de l&rsquo;achat.
        </li>
      </ul>

      <h2>Article 7 — Communication et incitation</h2>
      <p>
        Le parrain est libre de communiquer son code de parrainage par les canaux qu&rsquo;il choisit
        (réseaux sociaux, messageries, bouche-à-oreille). Il s&rsquo;engage à respecter les règles
        suivantes :
      </p>
      <ul>
        <li>Pas de spam ni de message non sollicité.</li>
        <li>Pas d&rsquo;inscription fictive ni de comportement frauduleux.</li>
        <li>Pas de publicité trompeuse sur les avantages du Service.</li>
        <li>Pas d&rsquo;utilisation de la marque Doniia hors du cadre défini par les CGU.</li>
      </ul>

      <h2>Article 8 — Modifications et arrêt du programme</h2>
      <p>
        Doniia se réserve le droit de modifier les règles du programme (notamment le taux de
        commission), de le suspendre ou d&rsquo;y mettre fin à tout moment. Toute modification
        substantielle sera notifiée aux parrains avec un préavis de <strong>30 jours minimum</strong>,
        et n&rsquo;aura pas d&rsquo;effet rétroactif sur les commissions déjà générées.
      </p>

      <h2>Article 9 — Fiscalité</h2>
      <p>
        Les sommes perçues au titre du parrainage peuvent être soumises à imposition selon la
        législation applicable au lieu de résidence du parrain. Il appartient à chaque parrain de
        déclarer ces revenus aux autorités fiscales compétentes. NOVEKAI LTD ne saurait être tenue
        responsable de l&rsquo;absence de déclaration.
      </p>

      <h2>Article 10 — Données personnelles</h2>
      <p>
        Les données liées au programme de parrainage (identité du parrain, du filleul, statistiques)
        sont traitées conformément à la <a href="/confidentialite">Politique de confidentialité Doniia</a>.
        Aucune information nominative du filleul n&rsquo;est partagée avec le parrain (seul un
        compteur de filleuls et le montant cumulé des récompenses est affiché).
      </p>

      <h2>Article 11 — Loi applicable et juridiction</h2>
      <p>
        Le présent Règlement est régi par le droit béninois. Tout litige relatif à son application
        sera soumis à la compétence exclusive du Tribunal de Commerce de Cotonou, République du Bénin.
      </p>

      <h2>Article 12 — Contact</h2>
      <p>
        Pour toute question relative au programme :{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>
      </p>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
