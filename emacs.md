# Emacs e Clojure

A ideia aqui não é ensinar o emacs, mas sim fazer com que você consiga seguir o tutorial com um editor com 
uma boa integração.

## Introdução

Emacs não é tão trivial assim, é quase um sistema operacional :smiling_imp: e vou logo avisando que ao entrar no mundo dele 
você não sai mais. Para facilitar, você pode instalar com o [spacemacs](https://github.com/syl20bnr/spacemacs), que já te facilita diversas coisas, e se você já é acustumado com evil-mode, vai ser dá bem.


## Instalação

No próprio repositório deles, explica como instalar em qualquer plataforma. Porém quando estiver instalando irá aparecer 
algumas opções:

![](http://jr0cket.co.uk/images/spacemacs-install-holy-mode.png)

Escolha a última para facilitar =) E então você que usa vim, não vai se perder nos comandos.

## Configuração

Então, pra exemplificar, o spacemacs tem um arquivo de configuração, assim como o vim tem o .vimrc, nele você pode especificar o que você que instalar de plugins, e ele tem uma coisa chamada de layer, onde você especifica apenas o nome, e ele ao iniciar já vai instalar o que essa layer propõe, por exemplo: Eu Adoro o spotify, o spacemacs disponibiliza uma layer chamada [Spotify](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Bweb-services/spotify) e sem precisar programar nada, ela já faz a integração do emacs com o seu spotify, assim você não precisa nem sair dele pra passar de música, dá play ou pause, etc. O emacs tem uma filosofia diferente do vim, a ideia dele é que você não precisa sair dele pra usar outra ferramenta, existe milhões de possibilidades ali dentro, tudo depende da sua criatividade. Você pode verificar todas as layers disponíveis [aqui](https://github.com/syl20bnr/spacemacs/tree/master/layers). Na pasta de +lang/ você vai encontrar o que queremos! Clojure, isso mesmo que você tá pensando, coloque clojure no seu arquivo de configuração, vou disponibilizar como é a minha:

```lisp
dotspacemacs-configuration-layers
   '(
     ;; ----------------------------------------------------------------
     ;; Example of useful layers you may want to use right away.
     ;; Uncomment some layer names and press <SPC f e R> (Vim style) or
     ;; <M-m f e R> (Emacs style) to install them.
     ;; ----------------------------------------------------------------
     auto-completion
     better-defaults
     emacs-lisp
     javascript
     markdown
     syntax-checking
     html
     shell
     colors
     clojure ;; <--- Olha ela aqui
    )
```

Ele também disponibiliza ótimos símbolos como: (λ [a] (+ a 5)), ƒ(+ % 5), ∈{2 4 6} and Ƥ

Ele troca algumas coisas como ```(fn[n] () ) --> (λ [n] () )```

Para ativar issso, na parte de configuração de usuário coloque: **(setq clojure-enable-fancify-symbols t)**

```lisp
(defun dotspacemacs/user-config ()
  (setq clojure-enable-fancify-symbols t)
)
```
