import React from 'react';

function PLUGIN_USAGE() {
  return (
    <section id="PLUGIN_USAGE">
      <h4 className="main-heading">プラグインの使用方法</h4>

      <section id="supported-introduction">
        <h5 className="sub-heading">導入</h5>
        <p>
          事前にプラグインをダウンロードしておいてください。
        </p>
        <p>
          DAWを開いて、インストゥルメントトラックとMIDIトラックを立ち上げます(以下では、Cubase12を使用して説明します)。
        </p>
        <img src="/img/Plugin_use.jpeg" alt="Plugin_use" className="plugin-sub-image" />
        <p>
          上記では、インストゥルメントとしてKontaktのピアノ音源を使用していますが、基本的には何を使っても問題ありません(好きな音源に挿してください)。インストゥルメントトラックに、オーディオinsertからCHORDINをインサートしてください。
        </p>
        <img src="/img/Plugin_MIDI_Output.png" alt="Plugin_MIDI_Output" className="plugin-sub-image" />
        <p>
          上記の画像を参考に、MIDIトラックに移動し、インスペクターよりMIDIインプットが「ALL MIDI INPUTS」になっているか確認してください(画像の左中央の項目)。MIDIアウトプットは、Kontakt7(音源名)-Event inputから、Kontakt7 01(音源名):Ins. 1. CHORDIN-MIDI inputに変更してください。
        </p>
        <p>このように設定することで、プラグインにMIDI信号が直接ルーティングされ、実際にCHORDINがMIDI信号を受け取って和音検出を行うことが可能となります。</p>
        <img src="/img/Plugin_using_demo.png" alt="Plugin_using_demo" className="plugin-sub-image" />
        <p>MIDIキーボードで鍵盤を鳴らして、プラグインが作動すればOKです。</p>
      </section>
      
      <section id="supported-function">
        <h5 className="sub-heading">機能</h5>
        <img src="/img/Plugin_Function.png" alt="Plugin_Function" className="plugin-function-image" />
        <p>
          Select Scaleでは、Major ScalesまたはMinor Scalesを選ぶ項目がありますが、一応意味があるのでコード検出ロジックのセクションで詳しく説明します。<br/>
          MIDI NOTEでは、リアルタイムでMIDIキーボードの押されている鍵盤名を表示します。多分、MAXで9個くらい表示される。<br/>
          INTERVALでは、2つの音の間隔を表す度数を表示します。3つ以上ノートが押されていると何も出ません。以下の表右側の様に表示されます。
        </p>
        <table className="striped centered responsive-table">
          <thead>
            <tr>
              <th>度数</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>短二度</td><td>MINOR 2ND</td></tr>
            <tr><td>長二度</td><td>MAJOR 2ND</td></tr>
            <tr><td>短三度</td><td>MINOR 3RD</td></tr>
            <tr><td>長三度</td><td>MAJOR 3RD</td></tr>
            <tr><td>完全四度</td><td>PERFECT 4TH</td></tr>
            <tr><td>増四度</td><td>TRITONE</td></tr>
            <tr><td>完全五度</td><td>PERFECT 5TH</td></tr>
            <tr><td>短六度</td><td>MINOR 6TH</td></tr>
            <tr><td>長六度</td><td>MAJOR 6TH</td></tr>
            <tr><td>短七度</td><td>MINOR 7TH</td></tr>
            <tr><td>長七度</td><td>MAJOR 7TH</td></tr>
            <tr><td>オクターブ</td><td>OCTAVE</td></tr>
          </tbody>
        </table>
        <p>
          左下のMIDIボタンやINTEボタンを押すと、MIDI NOTE、INTERVALの表示を非表示にすることができます。右下の歯車ボタンは、プラグインのウィンドウサイズを300×300～600×600まで変更可能です。
        </p>
      </section>
    </section>
  );
}

export default PLUGIN_USAGE;
