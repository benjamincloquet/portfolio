(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(e,t,n){"use strict";n.r(t);var r=n(344),d={props:{filterId:{type:String,default:null}},data:function(){return{seed:0,duration:.1,maxScale:20,frequency:.05}},methods:{setRandomSeed:function(){this.seed=Math.floor(1e4*Math.random())},fadeOutAndIn:function(e){r.a.timeline().to(this.$refs.displacementMap,{attr:{scale:this.maxScale},duration:this.duration,ease:"power1.easeOut"}).add(e).add(this.setRandomSeed).to(this.$refs.displacementMap,{attr:{scale:0},duration:this.duration,ease:"power1.easeOut"})},fadeIn:function(e){r.a.timeline().to(this.$refs.displacementMap,{attr:{scale:this.maxScale},duration:0}).add(e).add(this.setRandomSeed).to(this.$refs.displacementMap,{attr:{scale:0},duration:this.duration,ease:"power1.easeOut"})}}},l=n(17),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.filterId?n("svg",{attrs:{width:"0",height:"0"}},[n("filter",{attrs:{id:e.filterId,x:"0%",y:"0%",width:"100%",height:"100%"}},[n("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:e.frequency+" "+e.frequency,result:"NOISE",numOctaves:"2",seed:e.seed}}),e._v(" "),n("feDisplacementMap",{ref:"displacementMap",attrs:{in:"SourceGraphic",in2:"NOISE",scale:"0",xChannelSelector:"R",yChannelSelector:"R"}})],1)]):e._e()}),[],!1,null,"6ed533e4",null);t.default=component.exports}}]);