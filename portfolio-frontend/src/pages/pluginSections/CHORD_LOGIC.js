import React from 'react';

function CHORD_LOGIC() {
  return (
    <section id="CHORD_LOGIC">
      <h4 className="main-heading">コード検出ロジック</h4>
      <h5 className="sub-heading">コード検出ロジックについて</h5>
      <p>
        CHORDINのプログラムでは、以下の様な処理の流れでコードを検出します。
      </p>
      <ul>
        <li>1. MIDI信号を受信し、現在押されているノートを保存します。負荷対策のため、ノートは同時に最大10個までとします(それ以上は検出しない)。</li>
        <li>2. 現在押されているノートと、和音コードが定義されている関数と比較し、コード定義に一致するノートセットが見つかった場合、そのコード名が表示されます。</li>
        <li>3. 同時に、現在押されているノートの中で最も低いノートを取得します。</li>
        <li>4. 現在押されているノートがコードである場合、コード名に先ほど取得した最低音を含めることで転回形の表記を行います。</li>
      </ul>

      <p>プログラム上では、以下のようにコードとそのコードの構成音が定義されています。</p>
      <img src="/img/Chord_Define.png" alt="Chord_Define" className="plugin-function-image" />
      <p>
        ただし、コードを構成音で定義するロジックでは、以下のような問題点があります。
      </p>
      <p>
        <span style={{ color: '#ff69b4'}}>[構成音が同じコードの場合1]</span> Augコードは[Faug, C#aug, Aaug]の構成音が全てF, A, C#であるため、「Faugと表示したかったが、Aaugの転回形として表示されてしまった」という状況が発生します。Augコードに関してはSelect Scalesを利用して、キーに関連のあるコードを優先的に表示するようにしていますが、あんまり意味ないのでご了承ください(は？)。
      </p>
      <p>
        <span style={{ color: '#ff69b4'}}>[構成音が同じコードの場合2]</span> C4, E4, G4, B2のような場合、分数コードでCmajor/Bなんですが、CM7として表示されます。どうすればいいんだろう..
      </p>
      <p>
        <span style={{ color: '#ff69b4'}}>[メロディと一緒には使用できない]</span> 構成音によって判定しているため、判定プログラムがその音を和音の一部と認識してしまいます。あくまでコードのみ。
      </p>
    </section>
  );
}

export default CHORD_LOGIC;
