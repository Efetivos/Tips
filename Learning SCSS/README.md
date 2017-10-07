# Instalação DW

###### 1º Criar pasta raiz, e pastas css & scss
###### 2º Barra de Ferramenta  DW > Site > Novo Site
###### 3º Pre processadores CSS > Geral > Ticar " x " Criar Cometários de origem
###### 4º Origem e sáida > Escolher opção > Definir pasta de sáida e escolher pasta /css
###### 5º Salvar
###### 6º Editar arquivo .Scss e ver se gerou automaticamente o arquivo .Css


### Learning

> Criar Hover 
```bash
.container{
	.menu{
		a.{
			color: red;
				&:hover{
					color: blue;
				}
		}
	}

}
```

> Nesting Propriedades
```bash
.photo{
	background:{
		image: url('/path/to/img.png');
		size: cover;
		repeat: no-repeat;
		position: center;
	}
}
```

> Mixin Mobile
```bash
@mixin mobile {
	@media (max-width: 320px) {
		@content;		
	}
}

atribuindo:

@include mobile{
			background-color: $color-primary;
		}
```

> Função para Gerar background image
```bash
$sociais: facebook instagram twitter;

@each $item in $sociais {
	.icon-#{$item} {
		background: url('../images/#{$item}.png');
	}
}

result:
.icon-facebook {
  background: url("../images/facebook.png");
}

.icon-instagram {
  background: url("../images/instagram.png");
}

.icon-twitter {
  background: url("../images/twitter.png");
}


```