from funasr import AutoModel

# 1. 加载模型
# model_revision 可以锁定版本，"v2.0.4" 是目前主流的 Paraformer-Next 版本
model = AutoModel(
    model="iic/speech_paraformer-large-vad-punc_asr_nat-zh-cn-16k-common-vocab8404-pytorch",
    model_revision="v2.0.4",
    vad_model="iic/speech_fsmn_vad_zh-cn-16k-common-pytorch",
    punc_model="ct-punc",
    device="cuda:0"  # 如果有 GPU 请取消注释此行
)

# 2. 推理识别
# input 可以是本地文件路径，也可以是音频字节流
res = model.generate(
    input="D:\\code\\study\\remotion_test\\public\\audio\\test\\2\\2.mp3", 
    batch_size_s=300, 
    hotword='开源项目'  # 可选：设置热词提高特定词汇准确率
)

# 3. 输出结果（包含时间戳）
print(res)