// Modifier l'URL et ajouter une entrée dans l'historique de navigation
history.pushState({}, '', '/nouvelle-page.html');

// Écouter l'événement de popstate (retour ou avance dans l'historique)
window.addEventListener('popstate', function(event) {
  // Faire quelque chose lorsque l'utilisateur navigue vers une autre page
  console.log('Changement de page détecté');
});
// Remplacer l'URL sans ajouter une nouvelle entrée dans l'historique de navigation
history.replaceState({}, '', '/nouvelle-page.html');