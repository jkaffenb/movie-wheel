import urllib.request
import re


def find_video_url(search):
    url = "https://www.youtube.com/results?search_query=" + search + "trailer"
    html = urllib.request.urlopen(url)
    video_id = re.search(r"watch\?v=(S{11})", html.read().decode())
    print(video_id)


def main():
    return find_video_url("superbad")


if __name__ == "__main__":
    main()


