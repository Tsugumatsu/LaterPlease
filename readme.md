<h2>(Very) Fast Set-Up</h2>
<code><script src="https://rawgit.com/Tsugumatsu/LaterPlease/master/laterplease.min.js"></script></code>
<h2>Documentation</h2>
<details>
<summary><strong>Français</strong></summary>
Marre d'ouvrir 50 onglets à partir d'une page wikipedia ?
Situation classique : Vous trouvez une page immense et passionante, et vous vous mettez à ouvrir chaque liens dans un nouvel onglet.

Vous pouvez faire une offrande à Chrome en espérant qu'il ne mange pas toute votre RAM.
Ou bien vous passez une dizaine d'années à sauter de lien en liens pour absolument tout lire.

Arrêtez tout de suite. Votre page est équipée du plugin <i>LaterPlease</i>.

<h2>Fonctionnement</h2>

Avec <i>LaterPlease</i>, vous pouvez visualiser un lien en passant la souris dessus. Sans quitter la page, sans aucun clic.
Si la page vous intêresse, vous cliquer sur <i>Later!</i>, et la page est mise dans votre liste de lecture.

La liste de lecture vous suis partout sur le site et garde en memoire les sites que vous lui donnez. Pour toujours.

Comme ça vous avez une liste claire des pages que vous devez lire, et ce sans massacrer votre navigateur.

Le plugin ne requiert aucune dépendance, ni JQuery, ni CSS additionnel, ni modification de la page.
Vous liez le plugin sur votre page, ou dans vos scripts existants, et <i>LaterPlease</i> se charge de tout.

Et comme <i>LaterPlease</i> est aussi hébergé, même pas besoin de le télécharger.

<h2>Mise en Place</h2>
<code>laterplease.js</code> contient le code avec tous les commentaires si vous voulez le modifier ou l'étudier.<br>
<code>laterplease.min.js</code> est compressé, illisible pour les humains mais plus léger.<br><br>

1. Téléchargez <code>laterplease.js</code>.<br>
2. Collez <code><script src="laterplease.js"></script></code> sur la page.<br>

La visualisation s'active pour chaque balise <code>a</code>.<br>
Indiquez à <i>LaterPlease</i> d'ignorer un lien en lui donnant la classe <code>ignorePlease</code>.

<h2>Références CSS</h2>
<i>LaterPlease</i> a déjà un style appliqué par défaut pour le rendre présentable, mais si vous voulez l'adopter vous pouvez l'habiller plus proprement.

<ul>
<li>La carte qui apparait au survol : <code>#visuLater</code></li>
	<ul>
	<li>le cadre de visualisation : <code>#frameLater</code></li>
	<li>le bouton "Later!" : <code>#bookmarkLater</code></li>
	<li>la petite étiquette "Enregistré !" : <code>#bookmarkLater span</code></li>
	</ul>
</ul>

<ul>
<li>La liste de liens : <code>#listeLater</code></li>
	<ul>
	<li>un lien : <code>#listeLater a</code></li>
	<li>un bouton pour supprimer le lien : <code>.supprLater</code></li>
	</ul>
<li>Un lien impossible à visualiser : <code>.ignorePlease</code></li>
</ul>
Tout le code CSS est visible dans <code>style (For Reference Only !).css</code>. Inutile de le télécharger, mais vous pouvez y vérifier les règle CSS par défaut.
</details>
<hr>
<details>
<summary><strong>English</strong></summary>
Fed up with opening a thousand tabs from one Wikipedia page?

Classic. You just found a great and huge page, and you begin opening every single link in a new tab.


You could either donate your soul to Firefox, hoping that it won't chomp your RAM.
Or you could spend the rest of your life switching from tab to tabs to read everything.

Stop! Your web page is equipped with <i>LaterPlease</i>.

<h2>How it works</h2>
With <i>LaterPlease</i>, you can visualize a link by hovering over it. No page loading, no mouse clicking. If some page catches you eye, click the <i>Later!</i> button and the page get stored in your playlist.

The playlist follows you everywhere on the site and keeps the sites and links you need to read later. Forever.

You get a simple and clean list of the page you'll read, without killing performance.

This plugin does not have any dependencies, nor does it need JQuery, additionnal CSS, or any page modification. You only need to link the plugin on every page, and <i>LaterPlease!</i> does the rest.

And because <i>LaterPlease</i> is hosted on the web, you have the option not to download it.

<h2>Set-Up</h2>
<code>laterplease.js</code> contains the plugin with a lot of comments to elp you modify and understand it.<br>
<code>laterplease.min.js</code> is compressed, unreadable for humans but more lighweight<br><br>
1. Download <code>laterplease.js</code>.<br>
2. Paste <code><script src="laterplease.js"></script></code> on your page.<br><br>

The visualization shows up for every <code>a</code> tag.<br>
If you want <i>LaterPlease</i> to ignore a link, give it the class <code>ignorePlease</code>.

<h2>CSS References</h2>
<i>LaterPlease</i> already comes with its own CSS rules, but you can overrule them if you need.

<ul>
<li>The card that appears on hover : <code>#visuLater</code></li>
	<ul>
	<li>the visualization frame : <code>#frameLater</code></li>
	<li>the "Later!" button : <code>#bookmarkLater</code></li>
	<li>the tiny popup "Enregistré !" : <code>#bookmarkLater span</code></li>
	</ul>
</ul>
<ul>
<li>The list of links : <code>#listeLater</code></li>
	<ul>
	<li>a link : <code>#listeLater a</code></li>
	<li>a button to delete a link : <code>.supprLater</code></li>
	</ul>
<li>A link that needs to be ignored : <code>.ignorePlease</code></li>
</ul>
The whole styling is in <code>style (For Reference Only !).css</code>. You don't need to download it but you can use it to help to check the default rules.
</details>