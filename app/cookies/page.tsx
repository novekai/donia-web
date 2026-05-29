import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de cookies — Doniia",
  description: "Quels cookies et traceurs Doniia utilise, comment les accepter, refuser ou paramétrer.",
};

export default function CookiesPage() {
  return (
    <LegalLayout category="Cookies & traceurs" title="Politique de cookies">
      <h2>1. Qu&rsquo;est-ce qu&rsquo;un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone,
        tablette) par votre navigateur web lors de la visite d&rsquo;un site internet. Il permet de
        reconnaître votre appareil et de stocker certaines informations relatives à votre navigation
        (préférences, identifiant de session, statistiques d&rsquo;usage, etc.).
      </p>
      <p>
        La présente Politique décrit les cookies et traceurs utilisés par Doniia, leurs finalités,
        leur durée de conservation, ainsi que les moyens dont vous disposez pour les accepter, les
        refuser ou les paramétrer.
      </p>

      <h2>2. Cookies utilisés par Doniia</h2>
      <h3>2.1 Cookies techniques et fonctionnels (nécessaires)</h3>
      <p>
        Ces cookies sont indispensables au bon fonctionnement du Service. Ils permettent
        d&rsquo;assurer la sécurité de votre connexion, de mémoriser vos choix (langue, thème), et de
        maintenir votre session active. Ils ne sont pas soumis à votre consentement préalable.
      </p>
      <h3>2.2 Cookies de mesure d&rsquo;audience</h3>
      <p>
        Ces cookies permettent de comprendre comment les utilisateurs interagissent avec le Service,
        afin de l&rsquo;améliorer. Les données collectées sont anonymisées autant que possible.
      </p>
      <h3>2.3 Cookies marketing et réseaux sociaux (optionnels)</h3>
      <p>
        Ces cookies permettent de mesurer l&rsquo;efficacité de nos campagnes publicitaires sur les
        réseaux sociaux et plateformes tierces. Ils ne sont activés qu&rsquo;avec votre consentement
        explicite.
      </p>

      <h2>3. Liste détaillée des cookies</h2>
      <p>Le tableau suivant détaille les principaux cookies utilisés par Doniia :</p>
      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-sm my-4">
          <thead>
            <tr style={{ background: "var(--color-indigo)", color: "white" }}>
              <th className="text-left px-3 py-2 font-medium">Nom</th>
              <th className="text-left px-3 py-2 font-medium">Émetteur</th>
              <th className="text-left px-3 py-2 font-medium">Catégorie</th>
              <th className="text-left px-3 py-2 font-medium">Finalité</th>
              <th className="text-left px-3 py-2 font-medium">Durée</th>
            </tr>
          </thead>
          <tbody className="[&_tr]:border-b [&_tr]:border-[var(--color-line)] [&_td]:px-3 [&_td]:py-2 [&_td]:align-top">
            <tr>
              <td><code>doniia_session</code></td>
              <td>Doniia</td>
              <td>Technique</td>
              <td>Maintien de la session utilisateur</td>
              <td>Session</td>
            </tr>
            <tr>
              <td><code>doniia_csrf</code></td>
              <td>Doniia</td>
              <td>Technique</td>
              <td>Protection contre les attaques CSRF</td>
              <td>Session</td>
            </tr>
            <tr>
              <td><code>doniia_cookie_consent</code></td>
              <td>Doniia</td>
              <td>Technique</td>
              <td>Mémorisation des préférences cookies</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td><code>doniia_lang</code></td>
              <td>Doniia</td>
              <td>Fonctionnel</td>
              <td>Mémorisation de la langue choisie</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td><code>doniia_theme</code></td>
              <td>Doniia</td>
              <td>Fonctionnel</td>
              <td>Mémorisation du thème (clair / sombre)</td>
              <td>12 mois</td>
            </tr>
            <tr>
              <td><code>_plausible</code> / <code>_ga</code></td>
              <td>Plausible / Google Analytics</td>
              <td>Mesure d&rsquo;audience</td>
              <td>Statistiques de fréquentation anonymisées</td>
              <td>1 à 24 mois</td>
            </tr>
            <tr>
              <td><code>_fbp</code></td>
              <td>Meta</td>
              <td>Marketing (optionnel)</td>
              <td>Suivi des conversions des campagnes Doniia</td>
              <td>3 mois</td>
            </tr>
            <tr>
              <td><code>tt_appInfo</code></td>
              <td>TikTok</td>
              <td>Marketing (optionnel)</td>
              <td>Suivi des conversions TikTok</td>
              <td>13 mois</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic text-[var(--color-ink-3)]">
        Cette liste peut évoluer. Pour une version à jour, consultez doniia.com.
      </p>

      <h2>4. Vos choix en matière de cookies</h2>
      <h3>4.1 Lors de votre première visite</h3>
      <p>Un bandeau d&rsquo;information apparaît lors de votre première visite. Vous pouvez :</p>
      <ul>
        <li>Accepter tous les cookies.</li>
        <li>Refuser tous les cookies non essentiels.</li>
        <li>Personnaliser vos choix par catégorie.</li>
      </ul>
      <h3>4.2 Modifier vos choix à tout moment</h3>
      <p>
        Vous pouvez modifier vos préférences à tout moment en cliquant sur le lien « Gérer mes cookies »
        situé dans le pied de page du site doniia.com, ou en effaçant les cookies via les paramètres
        de votre navigateur.
      </p>
      <h3>4.3 Paramètres de votre navigateur</h3>
      <p>
        La plupart des navigateurs vous permettent de configurer le comportement des cookies. Voici
        les liens vers les pages d&rsquo;aide des principaux navigateurs :
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/fr/kb/cookies" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/fr-fr/HT201265" target="_blank" rel="noopener noreferrer">
            Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/fr-fr/edge" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>5. Conséquences du refus des cookies</h2>
      <p>
        Le refus des cookies techniques et fonctionnels peut empêcher le bon fonctionnement de
        certaines parties du Service. Le refus des cookies de mesure d&rsquo;audience et marketing
        n&rsquo;a en revanche aucun impact sur votre expérience utilisateur, mais limite notre
        capacité à améliorer le Service.
      </p>

      <h2>6. Mise à jour de la présente Politique</h2>
      <p>
        La présente Politique peut être amenée à évoluer. Toute modification substantielle vous sera
        notifiée via un bandeau d&rsquo;information sur doniia.com ou par email.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question relative aux cookies utilisés par Doniia, vous pouvez nous contacter à :{" "}
        <a href="mailto:contact@doniia.com">contact@doniia.com</a>
      </p>
      <p>Date d&rsquo;entrée en vigueur : 16 juin 2026.</p>
    </LegalLayout>
  );
}
