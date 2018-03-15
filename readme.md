<details>
<summary><strong>Français</strong></summary>
Marre d'ouvrir 50 onglets à partir d'une page wikipedia ?
Situation classique : Vous trouvez une page immense et passionante, et vous vous mettez à ouvrir chaque liens dans un nouvel onglet.

Vous pouvez faire une offrande à Chrome en espérant qu'il ne mange pas toute votre RAM.
Ou bien vous passez une dizaine d'années à sauter de lien en liens pour absolument tout lire.

Arrêtez tout de suite. Votre page est équipée du plugin <i>LaterPlease</i>.

Avec <i>LaterPlease</i>, vous pouvez visualiser un lien en passant la souris dessus. Sans quitter la page, sans aucun clic.
Si la page vous intêresse, vous cliquer sur <i>Later!</i>, et la page est mise dans votre liste de lecture.

La liste de lecture vous suis partout sur le site et garde en memoire les sites que vous lui donnez. Pour toujours.

Comme ça vous avez une liste claire des pages que vous devez lire, et ce sans massacrer votre navigateur.

Le plugin ne requiert aucune dépendance, ni JQuery, ni CSS additionnel, ni modification de la page.
Vous liez le plugin sur votre page, ou dans vos scripts existants, et <i>LaterPlease</i> se charge de tout.

Et comme <i>LaterPlease</i> est aussi hébergé, même pas besoin de le télécharger.

<h2>Mise en Place</h2>
<code>laterplease.js</code> contient le code avec tous les commentaires si vous voulez le modifier ou l'étudier.<br>
<code>laterplease.min.js</code> est compressé, illisible mais plus léger.<br>


1. Téléchargez <code>laterplease.js</code>.<br>
2. Collez <code><script src="laterplease.js"></script></code> sur la page.<br>

La visualisation s'active pour chaque balise <code>a</code>.<br>
Indiquez à LaterPlease d'ignorer un lien en lui donnant la classe <code>ignorePlease</code>.

<h2>Références CSS</h2>
LaterPlease a déjà un style appliqué par défaut pour le rendre présentable, mais si vous voulez l'adopter vous pouvez l'habiller plus proprement.

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
</details>


<hr>
<details>
<summary><strong>English</strong></summary>
bla bla bla
</details>