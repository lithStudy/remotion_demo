from step1_analysis.content_split import split_text_to_content

text = "你是不是也有过这种感觉？一提到坐飞机，心里就有点打鼓，脑子里下意识闪过坠机的新闻；一刷短视频，感觉某些国家天天都在零元购、街头枪战，觉得这世界实在太危险了。"
print(split_text_to_content(text))
