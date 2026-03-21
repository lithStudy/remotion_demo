import sys
import os

sys.argv = ['step1_analyze_script.py', '--input', '文案.txt', '--output', '../src/remotions/test/scenes', '--name', 'test']
os.environ['PYTHONIOENCODING'] = 'utf-8'

if __name__ == '__main__':
    import step1_analyze_script
    step1_analyze_script.main()
