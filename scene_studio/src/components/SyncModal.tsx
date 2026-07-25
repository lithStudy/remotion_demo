type Props = {
  projectName: string;
  updateNarration: boolean;
  setUpdateNarration: (v: boolean) => void;
  draft: Record<string, unknown>;
  narrationText: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function SyncModal(props: Props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>从脚本反推草稿（预览）</h3>
        <label className="check">
          <input
            type="checkbox"
            checked={props.updateNarration}
            onChange={(e) => props.setUpdateNarration(e.target.checked)}
          />
          同时更新口播稿 narrations/{props.projectName}.txt（默认勾选）
        </label>
        <h4>草稿</h4>
        <pre className="logs">{JSON.stringify(props.draft, null, 2)}</pre>
        <h4>口播拼接预览</h4>
        <pre className="logs">{props.narrationText}</pre>
        <div className="row sticky-actions">
          <button type="button" onClick={props.onCancel}>
            取消
          </button>
          <button type="button" className="primary" onClick={props.onConfirm}>
            确认写入
          </button>
        </div>
      </div>
    </div>
  );
}
