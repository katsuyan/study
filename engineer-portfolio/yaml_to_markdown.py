# -*- coding: utf-8 -*-

import yaml
import sys
from collections import OrderedDict

class YamlToMarkdown:
    #初期化
    def __init__(self):
        yaml.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG,
            lambda loader, node: OrderedDict(loader.construct_pairs(node)))

    #リストからマークダウンに変換
    def list_to_markdown(self, array, md_file):
        for obj in array:
            for key in obj:
                md_file.write(key + ": " + str(obj[key]) + "  \n")
            md_file.write("<br />\n")

    #オブジェクトからマークダウンに変換
    def object_to_markdown(self, obj, h_num, md_file):
        sharps = "#" * h_num + " "
        for key, val in obj:
            md_file.write(sharps + key + "\n")
            if isinstance(val, OrderedDict):
                self.object_to_markdown(val.items(), h_num + 1, md_file)
            elif isinstance(val, list):
                self.list_to_markdown(val, md_file)
            else:
                md_file.write(val + "\n\n")


def main():
    yaml_to_markdown = YamlToMarkdown()

    try:
        yaml_file = open("portfolio.yml", 'r')
        data = yaml.load(yaml_file)
    except:
        print(str(e))
        sys.exit()
    else:
        yaml_file.close();

    try:
        md_file = open("portfolio.md","w")
        yaml_to_markdown.object_to_markdown(data.items(), 2, md_file)
    except:
        print("\"portfolio.md\" opne error")
        sys.exit()
    else:
        md_file.close()


if __name__ == "__main__":
    main()
