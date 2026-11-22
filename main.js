// Mini-GPT en WebGPU pur (aucune dépendance). Niveau caractère, vocabulaire construit depuis corpus.txt.
// Chaque pas d'entraînement tourne sur le GPU du téléphone via WebGPU.
const $=id=>document.getElementById(id);
const log=t=>{$('log').textContent=t};
let running=false;

async function init(){
  if(!navigator.gpu){$('status').textContent='WebGPU indisponible: iOS 26+ requis, mettez Safari à jour.';return;}
  const adapter=await navigator.gpu.requestAdapter();
  if(!adapter){$('status').textContent='Aucun adaptateur GPU.';return;}
  const device=await adapter.requestDevice();
  const text=await (await fetch('corpus.txt')).text();
  const chars=[...new Set(text)].sort();
  const stoi=Object.fromEntries(chars.map((c,i)=>[c,i]));
  const V=chars.length, D=64, T=32, B=16;
  $('status').textContent=`GPU OK. Vocabulaire: ${V} caractères. Corpus: ${text.length} caractères.`;
  window.__state={device,text,chars,stoi,V,D,T,B};
}

$('train').onclick=()=>{
  const s=window.__state; if(!s){return;}
  running=true;
  log('Entraînement démarré (squelette). Le noyau complet est à brancher: voir README, section "État du projet".');
};
$('stop').onclick=()=>{running=false;};
$('save').onclick=()=>{log('Export: à implémenter avec les poids GPU.');};
$('gen').onclick=()=>{$('out').textContent='Génération: disponible après entraînement.';};

init().catch(e=>{$('status').textContent='Erreur: '+e.message;});
