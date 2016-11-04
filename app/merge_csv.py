import os


files = ['Beijing.csv', 'Shanghai.csv', 'Guangzhou.csv', 'Chengdu.csv', 'Shenyang.csv']


def init_files():
    for fn in files:
        f = open(fn, 'wb')
        f.write("Site,Parameter,Date (LST),Year,Month,Day,Hour,Value,Unit,Duration,QC Name\n")


def handle_csv(rf, wf):
    data = open(rf, 'r').read()
    for line in data.split('\n'):
        if "Valid" in line:
            with open(wf, 'a+b') as f:
                f.write(line + "\n")


if __name__ == '__main__':
    init_files()
    csv_dir = '../'
    for root, directory, files in os.walk(csv_dir):
        for f in files:
            if f.endswith('.csv'):
                if f.startswith('Beijing'):
                    handle_csv(root + '/' + f, 'Beijing.csv')
                elif f.startswith('Shanghai'):
                    handle_csv(root + '/' + f, 'Shanghai.csv')
                elif f.startswith('Guangzhou'):
                    handle_csv(root + '/' + f, 'Guangzhou.csv')
                elif f.startswith('Chengdu'):
                    handle_csv(root + '/' + f, 'Chengdu.csv')
                elif f.startswith('Shenyang'):
                    handle_csv(root + '/' + f, 'Shenyang.csv')
