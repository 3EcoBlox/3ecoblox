@echo off
echo ========================================
echo GIF to MP4 Converter for EcoBlox
echo ========================================
echo.
echo This script will convert all GIF files to MP4 format.
echo You need FFmpeg installed for this to work.
echo.
echo If you don't have FFmpeg, download it from:
echo https://www.gyan.dev/ffmpeg/builds/
echo.
pause

cd public

echo Converting section1.gif...
ffmpeg -i section1.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section1.mp4

echo Converting section2.gif...
ffmpeg -i section2.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section2.mp4

echo Converting section3.gif...
ffmpeg -i section3.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section3.mp4

echo Converting section4.gif...
ffmpeg -i section4.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section4.mp4

echo Converting section6.gif...
ffmpeg -i section6.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section6.mp4

echo Converting section7.gif...
ffmpeg -i section7.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section7.mp4

echo Converting section8.gif...
ffmpeg -i section8.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" section8.mp4

echo.
echo ========================================
echo Conversion complete!
echo ========================================
echo.
echo MP4 files created. You can now delete the GIF files to save space.
pause
