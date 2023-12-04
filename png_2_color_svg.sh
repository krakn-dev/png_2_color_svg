cd "$(dirname "$0")"

if [ ! -d input/ ]; then
    echo '"input" directory does not exists relative to frames2svg.sh'
fi

if [ -d output/ ]; then
    rm output/*
else
    mkdir output
fi

for frame in input/*
do
    node main.js $frame > output/"$(basename $frame .png)".svg 
done

