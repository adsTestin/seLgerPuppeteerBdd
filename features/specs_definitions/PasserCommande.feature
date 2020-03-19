Feature: Passer une commande


  @Passer_une_commande
  Scenario: Passer une commande en tant qu'invité
    Given Jean est sur l'eboutique de l'oreal paris.
    When il accède à la sous catégorie "Soin de la barbe" de la catégorie "Homme"
    Then il ajoute au panier le produit "Coffret Men Expert BarberClub 3 Produits Soin"
      And Il accède à son panier
      And il valide sa commande en mode invité