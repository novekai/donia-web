import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales — Doniia",
  description:
    "Mentions légales du service Doniia opéré par NOVEKAI LTD. Éditeur, hébergement, prestataires, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout category="Information éditeur" title="Mentions légales">
      <h2>1. Éditeur du service</h2>
      <p>
        Le service Doniia est édité et exploité par la société <strong>NOVEKAI LTD</strong>, société à
        responsabilité limitée de droit anglais (<em>Private company limited by shares</em>) immatriculée
        auprès de Companies House, Cardiff, sous le numéro <strong>16853666</strong>, en date du
        13&nbsp;novembre&nbsp;2025.
      </p>
      <div className="info-box">
        <dl>
          <dt>Dénomination</dt>
          <dd>NOVEKAI LTD</dd>
          <dt>Forme juridique</dt>
          <dd>Private company limited by shares (Royaume-Uni)</dd>
          <dt>Capital social</dt>
          <dd>1 GBP (100 parts ordinaires de 0,01 GBP)</dd>
          <dt>Immatriculation</dt>
          <dd>16853666 (Companies House, England and Wales)</dd>
          <dt>Numéro D-U-N-S</dt>
          <dd>234351363</dd>
          <dt>Code SIC</dt>
          <dd>96090 (other personal service activities)</dd>
          <dt>Siège social</dt>
          <dd>Office 8922, 321-323 High Road, Chadwell Heath, Essex, RM6 6AX, Royaume-Uni</dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:contact@doniia.com">contact@doniia.com</a>
          </dd>
          <dt>Téléphones</dt>
          <dd>+229 01 62 44 00 72 / +229 01 51 38 42 98</dd>
          <dt>Site web</dt>
          <dd>
            <a href="https://doniia.com">https://doniia.com</a>
          </dd>
        </dl>
      </div>

      <h2>2. Direction de la publication</h2>
      <p>Le directeur de la publication du site et du service Doniia est :</p>
      <ul>
        <li>
          M.&nbsp;<strong>Gilles-Christ Espoir Selomey AGBESSI</strong>, Directeur Général (CEO) et
          fondateur.
        </li>
      </ul>
      <p>
        Le projet Doniia a été co-imaginé par M.&nbsp;Gilles-Christ Espoir Selomey AGBESSI (CEO) et
        M.&nbsp;Paul ASSOGBA-ECOGBO (COO), au sein de NOVEKAI LTD.
      </p>

      <h2>3. Hébergement</h2>
      <p>Le site web Doniia est hébergé par :</p>
      <ul>
        <li>
          <strong>Squarespace, Inc.</strong> — 225 Varick Street, 12th Floor, New York, NY 10014,
          États-Unis —{" "}
          <a href="https://www.squarespace.com" target="_blank" rel="noopener noreferrer">
            squarespace.com
          </a>
        </li>
      </ul>
      <p>
        L&rsquo;infrastructure backend et les données applicatives sont hébergées au Bénin, sauf indication
        contraire dans la{" "}
        <a href="/confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>4. Prestataires techniques</h2>
      <ul>
        <li>
          <strong>Paiements en ligne et retraits Mobile Money</strong> : FedaPay (établissement de
          monnaie électronique agréé BCEAO).
        </li>
        <li>
          <strong>Envoi des emails transactionnels et notifications</strong> : Resend, Inc.
        </li>
        <li>
          <strong>Notifications push mobiles</strong> : Firebase Cloud Messaging (Google LLC) ou
          équivalent.
        </li>
      </ul>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L&rsquo;ensemble des contenus présents sur les supports Doniia (site web, application mobile,
        communications) — en ce inclus, sans limitation, les textes, illustrations, photographies, logos,
        marques, sons, animations, codes source, interfaces graphiques, bases de données, designs — est
        protégé par le droit de la propriété intellectuelle et reste la propriété exclusive de NOVEKAI LTD
        ou de ses partenaires ayant concédé les droits d&rsquo;usage correspondants.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale
        ou partielle des contenus du Service, par quelque procédé que ce soit, et sur quelque support que
        ce soit, est interdite sans l&rsquo;autorisation préalable et écrite de NOVEKAI LTD.
      </p>
      <p>
        La marque <strong>Doniia</strong>, le logo Doniia et tous les signes distinctifs associés sont des
        marques déposées ou en cours de dépôt par NOVEKAI LTD. Toute utilisation non autorisée constitue
        une contrefaçon sanctionnée par les articles applicables du Code de la propriété intellectuelle.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Le site Doniia peut contenir des liens vers d&rsquo;autres sites internet édités par des tiers.
        NOVEKAI LTD n&rsquo;exerce aucun contrôle sur le contenu de ces sites et décline toute
        responsabilité quant à leur contenu, leur fonctionnement ou leur disponibilité.
      </p>
      <p>
        La création de liens hypertextes en direction du site Doniia est autorisée, sous réserve
        d&rsquo;un usage loyal et non commercial. L&rsquo;utilisation de la marque Doniia dans le cadre
        d&rsquo;un tel lien doit faire l&rsquo;objet d&rsquo;une autorisation préalable.
      </p>

      <h2>7. Loi applicable et juridiction</h2>
      <p>
        Les présentes mentions légales sont régies par le droit béninois. Tout litige relatif à leur
        interprétation ou à leur exécution sera soumis à la compétence exclusive du{" "}
        <strong>Tribunal de Commerce de Cotonou</strong>, République du Bénin, nonobstant la pluralité de
        défendeurs ou l&rsquo;appel en garantie.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions légales ou au service Doniia, vous pouvez nous
        joindre :
      </p>
      <ul>
        <li>
          Par email : <a href="mailto:contact@doniia.com">contact@doniia.com</a>
        </li>
        <li>Par téléphone : +229 01 62 44 00 72 / +229 01 51 38 42 98</li>
        <li>
          Par courrier : NOVEKAI LTD, Office 8922, 321-323 High Road, Chadwell Heath, Essex, RM6 6AX,
          Royaume-Uni
        </li>
      </ul>

      <h2>9. Date de dernière mise à jour</h2>
      <p>
        Les présentes mentions légales sont en vigueur à compter du <strong>16 juin 2026</strong>. NOVEKAI
        LTD se réserve le droit de les modifier à tout moment, les utilisateurs étant invités à les
        consulter régulièrement.
      </p>
    </LegalLayout>
  );
}
