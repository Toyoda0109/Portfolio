import React from 'react';

function PLUGIN_OVERVIEW() {
  return (
    <section id="PLUGIN_OVERVIEW">
      <h4 className="main-heading">プラグインの概要</h4>
      <section id="plugin-about">
        <h5 className="sub-heading">このプラグインについて</h5>
        <p>
          CHORDINは、MIDI信号からリアルタイムに和音コードを自動的に検知・表示するVSTプラグインです。音楽制作や演奏の際に、押さえた和音がどのようなコードであるかを即座に知ることができ、音楽理論の理解や即興演奏に役立ちます。
        </p>
        <p>
          また、転回系に対応しているため、同じコードでも異なるベース音を検出できます。
          転回形については、以下のサイトが参考になると思います。
        </p>

        <p>
          参考にしたサイト: 
          <a href="https://soundquest.jp/quest/chord/chord-mv3/slash-chord-1/#:~:text=「転回形」とは、,これが「転回形」です%E3%80%82" target="_blank" rel="noopener noreferrer">
            スラッシュコード 転回形 - SoundQuest様
          </a><br/>
          参考にしたサイト: 
          <a href="https://kensukeinage.com/chord_chordinversion/" target="_blank" rel="noopener noreferrer">
            コードの転回形をマスターしよう - OTO×NOMA様
          </a>
        </p>
        <p>
          このプラグインは、JUCEというC++アプリケーションフレームワークで作成しました。
          MIDI信号を解析して和音コードを検知するだけので、直接音声処理などは行なっていませんが、独自のエフェクターやシンセサイザーも開発することもできちゃうんですね凄い！(あのVitalにも採用されているらしい..)
        </p>
        <p>
        C++の基礎知識が必要ですが、自分でVSTプラグインを作成してみたい！とお考えの方は、以下のサイトが参考になるので興味のある方は覗いてみてください^^
        </p>
        参考にしたサイト: 
        <a href="https://hackmd.io/@bayashi/BkbvY21Dj" target="_blank" rel="noopener noreferrer">
          JUCEでエフェクターを作って遊ぼう - bayashi様
        </a><br/>
        参考にしたサイト: 
        <a href="https://dtmer.info/juce/#i-1" target="_blank" rel="noopener noreferrer">
          0から始めるJUCE Framework - DTMer.info様
        </a><br/>
        参考にしたサイト: 
        <a href="https://trap.jp/post/1558/" target="_blank" rel="noopener noreferrer">
          JUCEでVSTプラグインを作ろう - 東京科学大学デジタル創作同好会様
        </a><br/>
        参考にしたサイト: 
        <a href="https://www.slideshare.net/CO_CO_/juce-handson-ableton-and-max-community-japan-009#62" target="_blank" rel="noopener noreferrer">
          JUCEハンズオン - Ableton and Max Community Japan様
        </a><br/>
        参考にしたサイト: 
        <a href="https://www.utsbox.com" target="_blank" rel="noopener noreferrer">
          C++でVST作り - うつぼかずら様
        </a>
      </section>

      <section id="plugin-video">
        <h5 className="sub-heading">プラグインのデモ動画</h5>
        <p>
          フォントが自分好みなので見づらいかもしれないね(反省)。
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/00P5P2zAgqU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </section>

      <section id="supported-environments">
        <h5 className="sub-heading">対応環境</h5>
        <ul>
          <li><strong>対応OS</strong>: Windows 10以降</li>
          <li><strong>対応DAW</strong>: Cubaseでのみ動作確認を行いましたが(他のDAWを持っていないため確認できないT T)、VST3形式に対応したソフトなら利用できると思います。</li>
          <li><strong>アーキテクチャ</strong>: 64ビットシステム</li>
          <li><strong>必要なもの</strong>: MIDIキーボード(MIDIトラックに打ち込んでも一応検出はされる)</li>
        </ul>
      </section>

      <section id="plugin-burden">
          <h5 className="sub-heading">プラグインのPC負荷について</h5>
          <div className="plugin-burden-images">
            <div className="plugin-item">
              <img src="/img/CHORDIN_Burden.png" alt="CHORDIN Burden" />
              <p>CHORDINのPC負荷</p>
            </div>
            <div className="plugin-item">
              <img src="/img/OTT_Burden.png" alt="OTT Burden" />
              <p>OTTのPC負荷</p>
            </div>
          </div>
          <p>
            上記では、本プラグインとOTTのPC負荷について調べてみました。どちらも鍵盤を複数押した結果ですが、これといった負荷はかかってないと思います。
          </p>
          <ul>
            <li>Real-Time: プラグインがリアルタイムでどれだけCPUを使用しているか。</li>
            <li>Peak: CPUが一瞬で処理する必要がある負荷のピーク値。</li>
            <li>ASIO-Guard: ASIO-Guardが負荷をどれだけ処理しているか。</li>
            <li>Disk Cache: ディスクからオーディオファイルを読み込む際の負荷</li>
          </ul>
      </section>


      <section id="supported-chords">
        <h5 className="sub-heading">対応コード</h5>
        <p>以下のコードを検出できます。要望があれば増やそうかな。</p>
        <table className="striped centered responsive-table">
          <thead>
            <tr>
              <th>コードの種類</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>メジャーコード</td><td>マイナーコード</td></tr>
            <tr><td>7thコード</td><td>9thコード</td></tr>
            <tr><td>11thコード</td><td>メジャー7thコード</td></tr>
            <tr><td>マイナー7thコード</td><td>Dimコード</td></tr>
            <tr><td>Sus4コード</td><td>7th Sus4コード</td></tr>
            <tr><td>Augコード</td><td>add9コード</td></tr>
            <tr><td>7-5(セブン・フラット・ファイブ)</td><td></td></tr>
          </tbody>
        </table>
      </section>

    </section>
  );
}

export default PLUGIN_OVERVIEW;
