# NSI-Subjects-Parser

This is a simple TypeScript program that parse NSI subjects from [NSI Subjects Downloader](https://github.com/trust-paulfr/NSI-Subjects-Downloader) (Convert PDF, Detect Exercices and Add some Flags to the exercices) save them in a JSON file.

## Prerequisites

- Node.js
- npm (if you want to use the TypeScript version and compile it)
- Export dir of [NSI Subjects Downloader](https://github.com/trust-paulfr/NSI-Subjects-Downloader) in the same directory as the program (./export) (You can change the path in the program if you want with .env file)

## .env file

You can change the path of the export dir of [NSI Subjects Downloader](https://github.com/trust-paulfr/NSI-Subjects-Downloader) with a .env file with the variable `EXPORT_DIR` like this:

```
APP_EXPORT_PATH=./export/
```

(an exemple of content in the ./export is ./export/47_65fbfac2f3f6d67a2ddff8d7.pdf)

## How to use

1. Clone the repository
2. Run the program with `node dist/index.js` or `npm run start` if you want to use the TypeScript version
3. Wait for the program to finish
4. The JSON file will be saved in ./NSI_Subjects.json 

## Output

The output is an array of PDF FIles with name, string of content, and an array of exercices with the number of the exercice, the content of the exercice, and the flags of the exercice.

```json
[
    {
        "namePDF": "47_65fbfac2f3f6d67a2ddff8d7.pdf",
        "content": "              BACCALAURÉAT\n\n                      SESSION 2024\n\nÉpreuve de l'enseignement de spécialité\n\n NUMÉRIQUE et SCIENCES\n        INFORMATIQUES\n\n            Partie pratique\n\n   Classe Terminale de la voie générale\n\n                         Sujet n°47\n\n              DURÉE DE L'ÉPREUVE : 1 heure\n\n      Le sujet comporte 4 pages numérotées de 1 / 4 à 4 / 4\nDès que le sujet vous est remis, assurez-vous qu’il est complet.\n\n                  Le candidat doit traiter les 2 exercices.\n\n                                          1/4\n\f                                     EXERCICE 1 (10 points)\nSur le réseau social TipTop, on s’intéresse au nombre de « like » des abonnés. Les données\nsont stockées dans des dictionnaires où les clés sont les pseudos et les valeurs correspon-\ndantes sont les nombres de « like » comme ci-dessous :\n{ 'Bob': 102, 'Ada': 201, 'Alice': 103, 'Tim': 50 }\nÉcrire une fonction max_dico qui :\n\n     • prend en paramètre un dictionnaire dico non vide dont les clés sont des chaînes de\n       caractères et les valeurs associées sont des entiers ;\n\n     • et qui renvoie un tuple dont :\n           – la première valeur est une clé du dictionnaire associée à la valeur maximale ;\n           – la seconde valeur est cette valeur maximale.\n\nExemples :\n\n>>> max_dico({ 'Bob': 102, 'Ada': 201, 'Alice': 103, 'Tim': 50 })\n('Ada', 201)\n>>> max_dico({ 'Alan': 222, 'Ada': 201, 'Eve': 222, 'Tim': 50 })\n('Alan', 222) # ou ('Eve', 222) également possible\n\n                                                     2/4\n\f                                     EXERCICE 2 (10 points)\n\nNous avons l’habitude de noter les expressions arithmétiques avec des parenthèses comme\npar exemple : (2 + 3) × 5.\n\nIl existe une autre notation utilisée par certaines calculatrices, appelée notation postfixe,\nqui n’utilise pas de parenthèses. L’expression arithmétique précédente est alors obtenue\nen saisissant successivement 2, puis 3, puis l’opérateur +, puis 5, et enfin l’opérateur ×. On\nmodélise cette saisie par le tableau [2, 3, '+', 5, '*'].\n\nAutre exemple, la notation postfixe de 3 × 2 + 5 est modélisée par le tableau :\n\n[3, 2, '*', 5, '+'].\n\nD’une manière plus générale, la valeur associée à une expression arithmétique en notation\npostfixe est déterminée à l’aide d’une pile en parcourant l’expression arithmétique de\ngauche à droite de la façon suivante :\n\n     • si l’élément parcouru est un nombre, on le place au sommet de la pile ;\n     • si l’élément parcouru est un opérateur, on récupère les deux éléments situés au som-\n\n       met de la pile et on leur applique l’opérateur. On place alors le résultat au sommet de\n       la pile.\n     • à la fin du parcours, il reste alors un seul élément dans la pile qui est le résultat de\n       l’expression arithmétique.\n\nDans le cadre de cet exercice, on se limitera aux opérations × et +.\n\nPour cet exercice, on dispose d’une classe Pile qui implémente les méthodes de base sur\nla structure de pile.\n\nCompléter le script de la fonction eval_expression qui reçoit en paramètre une liste\npython représentant la notation postfixe d’une expression arithmétique et qui renvoie sa\nvaleur associée.\n\nclass Pile:\n       \"\"\"Classe définissant une structure de pile.\"\"\"\n       def __init__(self):\n              self.contenu = []\n\n       def est_vide(self):\n              \"\"\"Renvoie un booléen indiquant si la pile est vide.\"\"\"\n              return self.contenu == []\n\n       def empiler(self, v):\n              \"\"\"Place l'élément v au sommet de la pile\"\"\"\n              self.contenu.append(v)\n\n       def depiler(self):\n              \"\"\"\n              Retire et renvoie l'élément placé au sommet de la pile,\n              si la pile n’est pas vide. Produit une erreur sinon.\n              \"\"\"\n              assert not self.est_vide()\n              return self.contenu.pop()\n\n                                                     3/4\n\fdef eval_expression(tab):\n       p = Pile()\n       for ... in tab:\n              if element != '+' ... element != '*':\n                     p.empiler(...)\n              else:\n                     if element == ...:\n                             resultat = ... + ...\n                     else:\n                             resultat = ...\n                     p.empiler(...)\n       return ...\n\nExemples :\n\n>>> eval_expression([2, 3, '+', 5, '*'])\n25\n>>> eval_expression([1, 2, '+', 3, '*'])\n9\n>>> eval_expression([1, 2, 3, '+', '*'])\n5\n\n                                                     4/4\n\f",
        "exercices": {
            "exo1": [
                "EXERCICE 1 (10 points)",
                "Sur le réseau social TipTop, on s’intéresse au nombre de « like » des abonnés. Les données",
                "sont stockées dans des dictionnaires où les clés sont les pseudos et les valeurs correspon-",
                "dantes sont les nombres de « like » comme ci-dessous :",
                "{ 'Bob': 102, 'Ada': 201, 'Alice': 103, 'Tim': 50 }",
                "Écrire une fonction max_dico qui :",
                "",
                "• prend en paramètre un dictionnaire dico non vide dont les clés sont des chaînes de",
                "caractères et les valeurs associées sont des entiers ;",
                "",
                "• et qui renvoie un tuple dont :",
                "– la première valeur est une clé du dictionnaire associée à la valeur maximale ;",
                "– la seconde valeur est cette valeur maximale.",
                "",
                "Exemples :",
                "",
                ">>> max_dico({ 'Bob': 102, 'Ada': 201, 'Alice': 103, 'Tim': 50 })",
                "('Ada', 201)",
                ">>> max_dico({ 'Alan': 222, 'Ada': 201, 'Eve': 222, 'Tim': 50 })",
                "('Alan', 222) # ou ('Eve', 222) également possible",
                "",
                "2/4"
            ],
            "exo2": [
                "EXERCICE 2 (10 points)",
                "",
                "Nous avons l’habitude de noter les expressions arithmétiques avec des parenthèses comme",
                "par exemple : (2 + 3) × 5.",
                "",
                "Il existe une autre notation utilisée par certaines calculatrices, appelée notation postfixe,",
                "qui n’utilise pas de parenthèses. L’expression arithmétique précédente est alors obtenue",
                "en saisissant successivement 2, puis 3, puis l’opérateur +, puis 5, et enfin l’opérateur ×. On",
                "modélise cette saisie par le tableau [2, 3, '+', 5, '*'].",
                "",
                "Autre exemple, la notation postfixe de 3 × 2 + 5 est modélisée par le tableau :",
                "",
                "[3, 2, '*', 5, '+'].",
                "",
                "D’une manière plus générale, la valeur associée à une expression arithmétique en notation",
                "postfixe est déterminée à l’aide d’une pile en parcourant l’expression arithmétique de",
                "gauche à droite de la façon suivante :",
                "",
                "• si l’élément parcouru est un nombre, on le place au sommet de la pile ;",
                "• si l’élément parcouru est un opérateur, on récupère les deux éléments situés au som-",
                "",
                "met de la pile et on leur applique l’opérateur. On place alors le résultat au sommet de",
                "la pile.",
                "• à la fin du parcours, il reste alors un seul élément dans la pile qui est le résultat de",
                "l’expression arithmétique.",
                "",
                "Dans le cadre de cet exercice, on se limitera aux opérations × et +.",
                "",
                "Pour cet exercice, on dispose d’une classe Pile qui implémente les méthodes de base sur",
                "la structure de pile.",
                "",
                "Compléter le script de la fonction eval_expression qui reçoit en paramètre une liste",
                "python représentant la notation postfixe d’une expression arithmétique et qui renvoie sa",
                "valeur associée.",
                "",
                "class Pile:",
                "\"\"\"Classe définissant une structure de pile.\"\"\"",
                "def __init__(self):",
                "self.contenu = []",
                "",
                "def est_vide(self):",
                "\"\"\"Renvoie un booléen indiquant si la pile est vide.\"\"\"",
                "return self.contenu == []",
                "",
                "def empiler(self, v):",
                "\"\"\"Place l'élément v au sommet de la pile\"\"\"",
                "self.contenu.append(v)",
                "",
                "def depiler(self):",
                "\"\"\"",
                "Retire et renvoie l'élément placé au sommet de la pile,",
                "si la pile n’est pas vide. Produit une erreur sinon.",
                "\"\"\"",
                "assert not self.est_vide()",
                "return self.contenu.pop()",
                "",
                "3/4",
                "def eval_expression(tab):",
                "p = Pile()",
                "for ... in tab:",
                "if element != '+' ... element != '*':",
                "p.empiler(...)",
                "else:",
                "if element == ...:",
                "resultat = ... + ...",
                "else:",
                "resultat = ...",
                "p.empiler(...)",
                "return ...",
                "",
                "Exemples :",
                "",
                ">>> eval_expression([2, 3, '+', 5, '*'])",
                "25",
                ">>> eval_expression([1, 2, '+', 3, '*'])",
                "9",
                ">>> eval_expression([1, 2, 3, '+', '*'])",
                "5",
                "",
                "4/4",
                ""
            ]
        },
        "flags": {
            "exo1": [],
            "exo2": [
                "pile/file",
                "POO",
                "liste"
            ]
        }
    }
    ...
]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details