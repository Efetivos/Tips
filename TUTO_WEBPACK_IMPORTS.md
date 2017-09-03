# vue_project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

>> IMPORTANTE LIBS EXTERNAS WEBPACK / VUE

#Libs:
 GSAP: npm install --save-dev gsap
 Jquery: npm install --save-dev jquery
 ScrollMagic: npm install --save-dev scrollmagic
 (Verificar se todos constam no  Package.json)

 >> gsap.animation(ScrollMagic)
 #Install imports-loader:
 # npm install --save-dev imports-loader (Verificar Package.json)
#Incluir no arquivo "webpack.base.conf.js
 resolve: { 
  ....
  alias: { //Seção Alias
  >>  "ScrollMagicGSAP": "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
  }
},

... //Seção Rules
module: {
  rules: [
    ....
    {
      test: /\.js$/,
      loader: "imports-loader?define=>false"
    },
  ],
},
....

>> IMPORTAR/INSERIR DENTRO DO COMPONENTE.VUE > Dentro da tag <script>
import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

>> Fazer animações dentro da função:
#export default { mounted(){ ......  }}
export default { 
    mounted () { 

        //Animação vai aqui

    } //Close Mounted
} //Close Export Defautl

>> TRANSIÇÃO COM ROTAS
#usar o <router-link> no lugar da tag <a>
<router-link to="/path"> Home </router-link> 

#dentro da tag export default { .... } //Não de esquecer colocar onComplete:next depois da Timeline ou TweenMax
beforeRouteLeave(to, from, next) {
    var tlTrans = new TimelineMax({onComplete:next}).fromTo(this.$refs.cross, 2 ,{width: 0}, {width:"100%", ease: Power3.easeIn})
  }