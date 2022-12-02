# Advent of Code 2022

In TypeScript. If possible, in type land only.

Day 01 - Type land solution: [Part 1](https://www.typescriptlang.org/play?noUncheckedIndexedAccess=true&useDefineForClassFields=true&noUnusedLocals=true&noUnusedParameters=true&esModuleInterop=false&declaration=false&experimentalDecorators=false&emitDecoratorMetadata=false&target=99&jsx=0&pretty=true&noErrorTruncation=true&isolatedModules=false&useUnknownInCatchVariables=true&exactOptionalPropertyTypes=true&noFallthroughCasesInSwitch=true&noImplicitOverride=true&noPropertyAccessFromIndexSignature=true&ts=4.9.3#code/JYWwDg9gTgLgBAbzgQQCaoDRwLIEMAecAvnAGZQQhwDkMAzgLS5TAwAWIApjMAMbUBuAFBCYATzCc4wAHZgArvAC8cAAYBGAAzahAJm2ahAZgMiALKaEBWUwDZLAdlMAOUwE5LW06uEjxkuAB9ABV5MAAbTjx8AB5guE58GE4ZVDo4GXkQACNOKABtAF0sZF5eLISklLSMrNyoAD44FXjE5NT0-NlSPLgAMWAoOng26vTMnLysADpZ7t6AJU5hyvaaifqiwqE4XbgAfiDQiKiCGKXhrGiY0vKQLAGhmAaGnb2ALhQyrN9-KRCwpEAMpZOKrMa1SYFYpfO7gjqQ+pNFrwmpdGQ9KD9QYrUYIjZTOCzabzLEXEZVfF1PJbN67Q4Ak4gkDnZYwEroG7fe7Yp4vOlwT63H4iUQSKQAUXCADdljEAJJyRQlbmo9LDFgyADmRWRcEVCgpa3SqgAJAhSXAAArMI0QjWyLVEAA6Mld5st5KIqgFhylsrorMucHyxOFPJtsEKrz2gv1SrtCLNFoxvUjiZqDu1LpkPtjscOodm4aw6e2+Y+sJFYoCzIA8qQgY7IlLSGC8ZmYJqtSq4R3xtToXrWpSasnLQA5Cr9xF5HMe1Nktne31weuN5ucVtB9khsPcrBTkDRgWfEfGtQLzFwI9q2dQFcV+lHQGcZkxIvTEs3rIwzQxp9PkZYFQW-f9fnFOBW2CCAYFwcJA3Pe0u0dIpe2nUcByhXVmjgJCEXRa9HlxTC4CzHsiTmRc4HJO9yNpAsoPCUgYLghCdywT9v3XJttRbZiYmI3ddRPWMhW5CCAlbABheDoGAThWPg9IVGg2DlJif05VkQ1OOjPSGmEP4UBkOgAHdehUYDTliGS5JYRT1IQrBwKEAB6Ny9gAPX2IQgA) / [Part 2](https://www.typescriptlang.org/play?noUncheckedIndexedAccess=true&useDefineForClassFields=true&noUnusedLocals=true&noUnusedParameters=true&esModuleInterop=false&declaration=false&experimentalDecorators=false&emitDecoratorMetadata=false&target=99&jsx=0&pretty=true&noErrorTruncation=true&isolatedModules=false&useUnknownInCatchVariables=true&exactOptionalPropertyTypes=true&noFallthroughCasesInSwitch=true&noImplicitOverride=true&noPropertyAccessFromIndexSignature=true&ts=4.9.3#code/JYWwDg9gTgLgBAbzgQQCaoDRwLIEMAecAvnAGZQQhwDkMAzgLS5TAwAWIApjMAMbUBuAFBCYATzCc4wAHZgArvAC8cAAYBGAAzahAJm2ahAZgMiALKaEBWUwDZLAdlMAOUwE5LW06uGiJUgH0AFXkwABtOPHwAHiC4TnwYThlUOjgZeRAAI04oAG0AXSxkXl5M+MTk1PTMnKgAPjgVOISklLS82VJcuAAxYCg6eFaqtIzs3KwAOhmunoAlTiGKturxusKCoTgduAB+OGDQiKjoxaGsU5KykCx+wZh6+u3dgC4UUszfcUlDkPDOABlTKxFajGoTfJFD43MHtCF1RrNOHVToybpQPoDZYjeHrSZwGZTOaY87DSp42q5TYvHYHI4A4EgM5LGDFdDRa6ZO7Yx7PXZwd5ckDffxwACiYQAbktogBJOSKYqfKi46pDFgyADmhSRcAVCnJqzSqgAJAgSXAAArMI3gjWyLVEAA6Mld5stZKIqlp+wl0tlZKweSJwqwNtgBX5b31irt8LNFvRPQj8fVME1TtdPoFAoOIZmYettq2uZjwtFv0lpCZoLVaQd2uVsPrCOpUaacBaFOqictADlyq38VAXTIPcnSazvb6DtXa0G4AWpkXByAo773t3jWoJxi4GuUWMqaOc2W-QyIrXl6vMtDNNGy+9L0CQUWH5WpNWghAYLgwnQdY9g2GaOoUzZDsBbZQnq27gmi+73DiUGNlq0yzJOcBkkecCoTSeb+qQP5-gBLIXEuoYqlg84gkhbJLlGG4CkKKq+H4VZhKQADC-7QMAnDEf+aQqN+v5CdEkoyoBsiGsGUZyfUn5YmESRQEBO64DIYjgXAABq-7yJwEGqlBmnaR2yKtghPR0ehxKYWSpa7AcdE4fpYSGb6BH9CpuRkfR7mGcZj65u8Pmqf5WCBUZFGFlRWIPExMZwfCeTRU5ZYHEEXnliqIg-FIVpQJwUqdnkMglQSmhYOoWC6AUwgFdafAANY-mARiclAmLDieOnCjhI46VaEBpK2RUleVJ4FJ2uh6r6eQjXQM1WRVMpQBlfrCpuzW8G1EAddEOU7OFfnIN1xlTZCM0AD5-MckQEF1UBYA+CkYMdsUrvFL5XBdcAPkUn0TVKi2jZtikiOxUjIDIdAAO49CoL61larXtZ11Y8WEfECWJAHvQDkMAPTE7sAB6ewiEAA)

Day 02 -Type land solution [Part 1](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgQQCargXzgMyhEOAchgGcBaAQymBgAsQBTGYAYyIG4AoLmATzCM4ANUoAbAK6NScALyIucJcWRwAGkQBccACwAaRcqKqAmlrgAOA8pVwAWuYDM1owCF15gIwulRd2e0AVh9idwdtAE4QogBhD20Admi4gLgAJmT7cwA2LkxuXgEhAH0AZTAxWgAeABU4RgAPGEYAO1QZUhgaFoBzPRRWVglCRua2mRbhgCNGKABtAF1+0sYweqbW9rhO7p65YgAdFqIAPjlDJTrRzZkAAwASBGAWnFm4AAlGSgxr8bgAa0YfAgOBE4ikpEwjxWYChTxebwAStJ4L8tjtnj1MLcLnAAPxwMoVarIzr9OYAOipyEGw36okk0jmn2+CyWcBhJ1x2iuGz+D3hrygHy+Pz5W0BwNBDIh2NxNgJlOptJA9PBTJZqDZ8uU2hpQxABX4gkJNQkFUYpWGtXWYy2kxAM3m7P1w1tNzgDqdZ3kvLtMjmzyFcAAYsAoJ13X8vbN+lSKUGkSio-bprNFgtcQTimaLVaQFVSTB+mhUFVXarQ+HOicuTY9SqCoUTcUYgQwBJmsgWqQAO6zG1ojpdTE+03msSW61EyowWrkhYnfoABhOTeNQm7fdmnn2rfbncYW-7UCqzw7ME8a+bm57J7Se7b4EPx4H587aWvG5Qd9mjkfB5dr+p7vjAjjXjeVYtOIr7CvIpblsB3goOgiHblAGQ-uh4HXgA9LhygAHp4jwXD4XAoHbMS8DPDAEBwP+YDUGQcAzKwlASKQQj0EIrDtsAk7CuxxzwHQlBtJOFE0S0cC7kxsCQaBu7yLccR2FwcRqFwYRcKoWmqOpam6XAJgafYZnqXpZmmQZ2nmUZRk6Y59nmVZDmueoFl2epTkuT5Hn6Z57mWZ5OlhQFxmBVpvmGX53lmdF5k6W5cXJSZxmxVFXnObFuUJV5VnhZlXlFSVSWpR5IVac5iV5UZtkxfF-gZWVVXGaZOXxYVlXxe5HXlXVcWaU1A1dUFcUpf5U3ZRNoUVdNw0NbNWXddNpWlTVM3+dVLk2eNIVtetQ2ebZfXtZFI07QdrVjbVF0pCNe3TZN92jUtIX9YN20FXNd31XNz3laZG3zTd3VZQ9jXBSNeVWaYN2Nc1nWdb5d22XD+29cdgOfVtWOA1ddmE+DLXhRDHl7f1hP-YFwM9WlhPuHdR2xXTa09fD0NpW1nPlcTJ1vQLO0rQLeVQ6NaVs-jY17X9gvU6Dp2g8NLPnateNLbjqsYwrbWder6sM69H2k+lXPpUrC3KxTP2JfzUuIxFqule9dla8dzMS07o360LLXQzreP-e7X3ncjfvQwHmPBzN5NW9dZP+8t+WS7b0sG9H6Wp873v+bjKMVQ7fPS6ngfuYzPXmybD2Bxnnsm0jXuwxH9PFy7Zvy-lVdJ6Hkcd+zFfs-HWMV-bCNA2n4uU8bJcRfD8ON6HjWGwDeM5zzNuJ75dNF1bIcXWXm9N7dMNg37L3h4Ncti0fw-DTXmMX6D2c+y5g+nyrWei2fecn+FO-p0xuLPWFtX7N0SvnSux9fZoy-jfeBasBZUzTv9UOltTYINdkbee41r4nxgSg0BkD64z0XudJmk9sbj2ujHduu9Z7gI-v3GefdcZYIqiQ9Gmcx6O17qvCh7DiE-QQawruoDiopQAZrIOYCZ7qyjlLPuh1rYDwYWNBu0Dj6pxppQ9+IMr5MKtllZqGNh6oyJj3DWxcCHL1Xt3exUCNFDx+vvX2rMrEV33q7cOiiVEyMYVw6eOjXY4Lti40+7dGGN36kIjGUsuG60AfE3BF1gGIJIbwiJ41IHfX0ak4+7Dh6SOoRYhJp8F6yPLrcI0RQKItAvA+FSFC0kvXQQ-WBccLE6KUek4RN0Hq+3dsY5OzS4Ey0um7aWqC5HJ27uLfm79gkt2bpg-hQDn6P0cVkgxRs8mZIoVHRJRtIazV8cogxbSxm7MFqswKzjDnkMFrLcJT8CaEO+j4rG+9tG7XyW87WSCZFhMDtc5xBy-E6LSQ4hBxzKmK02WcjxXzY7bKTvQqefzkVLOKotYurzZ45PKQU9ZECsU3LXrNRhUccURW6XPOFATjpBOYSY9ZS9raLPpcM5xpipn0rYQig+WznICtgUUlJeTIXwrls8yVuc1F0tuePBWdM7mWIqXg6lMivFQM8UCyZKVabhPaWow+byY6fzQZnEBzyXrYM2e-dB4LVnPJOTy7+PTvGt0ZR0ilxV7VHP5fg5OoT8qhu3nyu+b8UV7LZVY1VQrZVUOKevGZeClZhJFS1UNm1uZCpEfKguN9fUguJSqiZZ1YUSLsa3X1RbSkd0RffWRpbzmRsxW6-xFaqF5LiYA3JPbo22N9SDI1DyyHOvUUKtVZqu0vzMYO76vMYUbKtSuvhAqAFSubui5NyyU7RqdVQy1-TaXWvbe3QNG8eHHusb8kGtrmEhJrYigFnLBqbpmk9QBJDy4zJATQ8l9bRlUrLQS-NZVv28zUNUng35QL-iaa-Haj7RUYJPq0lJmG8GXpKVWjtq8ynNqbYRuNGcC3pq5b0y+LCGVduA5o1RWaI3PqjUqqVQjWWJPDbfJFD7T0fK9kau1siflOJ-u2y5wm41nWhae0lBD63LrKpRlZfqD2QMJUszVLbM5JreRUpd56838Y1X01j1lDG0fuXuxF6D5G8YnR7TFw6CMLoyautOInH1gqHTWjeRnxXuyLgKgtPqsmkpE8W09Oq1VceDQuq1ejvauP86iz+Cz0tpfw5tAZXshl9LmRzGtOHF1ua7YZhV8KtOkZ0+4ydIGG0i2nlwvhSXXq-tmYW7LjGvPnr7XmqLSLsOSb3SOiF4jSGHt63XPD5Le1pbOq29TsnQHcbWTusOyGrOzfHSy4z8rlO4rHRPAFiWLGZJsVsgRMnisefOwxtjlmjtCZmTEsR66w10cNUSsJl370zec0psZzaAMJcef80TUPOH7Zvmh475nmG0LvW2nppcO4Kc7tM65cXJuVZM96-tFXpUYY22fYW7a8ufazfinp9aHl7Ye1ohl1SgA) / [Part 2](https://www.typescriptlang.org/play?#code/JYWwDg9gTgLgBAbzgQQCargXzgMyhEOAchgGcBaAQymBgAsQBTGYAYyIG4AoLmATzCM4ANUoAbAK6NScALyIucJcWRwAGkQBccAMwAaRcqKqAmlrgAWA8pVwAWuYAc1owCF15gIwulRd2e0AVh9idwdtAE4QogBhD20AJmi4gLgANmT7cwB2LkxuXgEhAH0AZTAxWgAeABU4RgAPGEYAO1QZUhgaFoBzPRRWVglCRua2mRbhgCNGKABtAF1+0sYweqbW9rhO7p65YgAdFqIAPjlDJTrRzZkAAwASBGAWnFm4AAlGSgxr8bgAa0YfAgOBE4ikpEwjxWYChTxebwAStJ4L8tjtnj1MLcLnAAPxwMoVarIzr9OYAOipyEGw36okk0jmn2+CyWcBhJ1x2iuGz+D3hrygHy+Pz5W0BwNBDIh2NxNgJlOptJA9PBTJZqDZ8uU2hpQxABX4gkJNQkFUYpWGtXWYy2kxAM3m7P1w1tNzgDqdZ3kvLtMjmzyFcAAYsAoJ13X8vbN+lSKUGkSio-bprNFgtcQTimaLVaQFVSTB+mhUFVXarQ+HOicuTY9SqCoUTcUYgQwBJmsgWqQAO6zG1ojpdTE+03msSW61EyowWrkhYnfoABhOTeNQm7fdmnn2rfbncYW-7UCqzw7ME8a+bm57J4Se7b4EPx4H587CWvG5Qd9mOkfB5dr+p7vjAOjXjeVYtOIr7CvIpblsB3goOgiHblASQ-uh4HXgA9LhygAHp4jw+FwKB2zEvAzwwBAuhwGA1BkHAMysJQEikEI9BCKw7bAJOwpscc8B0JQbSTuR1EtHAu6MbAkGgbu8i3HEdhcHEahcGEXCqJpqhqapOlwCY6n2KZam6aZJn6VpZmGYZ2kOXZZmWfZLnqOZtlqY5znee5ekeW5FkedpoX+UZAWaT5Bm+V5plRWZ2mubFSXGUZMWRZ5TkxTl8WeZZYUZZ5hXFYlKXucFmlOQluWGTZ0Vxf46WlZVRkmdlcUFRVcVue1ZW1bFGmNf1nWBbFyV+ZNWXjSF5VTUN9UzZlXVTSVJXVdNflVc51ljcFrVrYNHk2b1bURcN237S1o01edKTDbtU0TXdI2LcFfUDVt+WzbddWzU9ZUmetc3XV1mX3Q1QXDbllmmNdDVNR1HU+bdNmw3tPVHQDH2bZjAOXbZBNg81YXg+5u19QTf0BUD3WpQT7i3YdMW06t3Vw1DqWtRzZVE8dr389ty387lkMjalrN46Nu2-QLVMgydINDczZ0rbji04yr6Py61HVq2r9Mve9JNpZzaWK-NSvk99CV85LCPhSrJVvbZmtHUz4uOyNeuC81UPa7jf1u59Z1I77UP+xjQfTWTltXaTftLXlEs21L+tR2lKdO17fk48j5X27zUspwHbkM91ZvG-dAfpx7xuI57MPh3TRfO6bct5ZXichxH7ds+XbNx5j5d2-DgOp2LFNG8X4Vw3DDchw1Bv-bj2fc9bCc+bTheW8H52lxvjc3dDoO+89YcDbLouH0PQ3Vxj58g1n3vOQPJ-K5nIun7nx9hdvacYzFrrc2L8m4JTzhXI+PtUaf2vnA1W-NKapz+iHC2Jt4Eu0NnPMaV9j7QOQSAiBddp4LzOozCeWMx5XWjm3HeM8wHvz7tPXuONMHlWIWjDOo8HY9xXuQthRDvrwJYZ3EBRVkr-w1oHUB081aR0lr3A6Vt+70NGvXKBR8U7UwoW-YGl9GGW0yk1dGQ8UaE27urIu+Cl4ry7nYyB6jB7fT3j7Fmljy57xdmHBRyjpEMM4VPbRLtsG22cSfNuDCG59UEejSWnCdYALiTg86QCEHEJ4eEsaECvp6JSUfNhQ8JFUPMfEk+88ZFl1uEaIo5EWgXgfMpchqTnpoPvjA2O5jtGKLSUI6690fZuyMUnJpsDpYXVdlLFBsik5dzFnzN+QTm5NwwXwwBT8H4OMyfow2uSMnkMjgkw2EMZo+KUfo1poydkCxWQFJxByyECxlmEx++MCFfW8ZjPeWidp5NeVrRB0jQkByuU4-ZvjtGpPsfAo5FSFYbNOe4z5MctmJzoZPX5SLFlFQWkXF5M9sllPyWs8BmLrmrxmgwyO2LwpdNnrC-xR1AlMOMWsxeVsFl0qGU4kxky6WsPhfvTZTl+UwMKck3JEK4WyyeRKnOqjaU3LHvLWmtyLHlNwVS6RnjIEeMBRM5KNMwltNUQfV50cP6oIzsAp5z0sEbLfmgsFKynnHO5V-bpXiW4MvaeSoqdrDl8rwUnEJeUQ1b15bfV+yLdmsssSqwVMrKFFLXtM3BitQnCuaiGjaXNBXCLlfna+PrgVEuVeM06MLxG2Jbj6wtJT24IrvjIktZyI0YtdX48tlDcmxIATk7tUabE+uBoa+5pCnVqMFaq01nbn6mIHV9Hm0L1mWuXbw-l-9JVNzRUmpZyco2OsoRavpNKrVtrbgG9e3Cj1WJ+cDG1TDgnVoRf8jlA0N3TUegA4hZdpnAOoWSutIzKWlvxXm0qX6eZqCqTwb8oF-yNJfttB9Ir0HHxackjDuCL3FMre2lepSm2NoI7G9O+a02cp6RfZh9LO1AY0SozN4an2RsVZKwRLKElhpvoi+9J73me0NbamR3zHHfzbRcoTsbTpQpPSS-Bdal2lQo8s31+6IEEsWRq5tGdE2vPKYus9ua+Pqt6SxqyBiaN3N3QitBciePjvdhiod+H53pJXanYTD7QWDurevQzYq3aF35fm71mSSXCaLSe7VqrONBvnZa3RXsXF+ZRR-eZaXUt4Y2v0z2gzemzPZtW7DC7XOdoM-KuFmmSPabcRO4D9bhZT04bwxLL0f0zILVlhjnmz29tzZFxFWGJO7uHeCsRJCD09drrhslPbUunRbWpmTICuOrO3aHJDlmZtjuZUZuVSmcWjvHv8hL5iMnWM2fw6TRX3Nnfo6xizh3BPTOiaItdobaMGsJaEi7d7ptOcU6Mpt-74sPL+SJyHHC9vX1Q0dszTCaG3tbd0ku7d5MdymVc2LE2KvGa9X28rUr0PrdPkLNtuWPuZrxd0ut9zdv3c0fSqpQA)