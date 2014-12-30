define(["lib/react","lib/lodash","lib/clib","stores/EngineVirtualStore"],function(e,t,n,r){function s(){return{engine:r.getState()}}function o(e){var n=0,r=0,i=0;t.each(e.playerInfo,function(t,i){e.username!==i&&(t.stopped_at?r+=t.bet:n+=t.bet)}),e.currentPlay&&(i=e.currentPlay.bet);var s=n+r+i;return[n/s*100,r/s*100,i/s*100]}var i=e.DOM;return e.createClass({displayName:"BetBar",getInitialState:function(){return s()},componentDidMount:function(){r.addChangeListener(this._onChange)},componentWillUnmount:function(){r.removeChangeListener(this._onChange)},_onChange:function(){this.isMounted()&&this.setState(s())},render:function(){var e=this;if(this.state.engine.gameState==="STARTING")return i.div({className:"bet-bar-container"});var t=o(this.state.engine),n=t[0],r=t[1],s=t[2],u,a,f;return this.state.engine.gameState==="ENDED"?(u="bet-bar-lost",a="bet-bar-won",f=this.state.engine.currentlyPlaying?"bet-bar-me-lost":"bet-bar-me-won"):(u="bet-bar-playing",a="bet-bar-cashed",f=this.state.engine.currentlyPlaying?"bet-bar-me-playing":"bet-bar-me-cashed"),i.div({className:"bet-bar-container"},i.div({className:u,style:{width:n+"%"}}),i.div({className:f,style:{width:s+"%"}}),i.div({className:a,style:{width:r+"%"}}))}})});