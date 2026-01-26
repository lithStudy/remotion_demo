# 提交并推送到 GitHub 的脚本
cd d:\code\study\remotion_test

# 删除可能存在的锁文件
if (Test-Path .git\index.lock) {
    Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
}

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Remotion video project"

# 检查并设置远程仓库
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    git remote add origin https://github.com/lithStudy/remotion_demo.git
} elseif ($remoteUrl -ne "https://github.com/lithStudy/remotion_demo.git") {
    git remote set-url origin https://github.com/lithStudy/remotion_demo.git
}

# 推送到 GitHub
git branch -M main
git push -u origin main

Write-Host "完成！项目已推送到 GitHub" -ForegroundColor Green
