<?php

namespace to_xml;

/**
 * Define constants.
 */
define("MACLAN_FOLDER", "../maclan");


/**
 * MAIN ENTRY POINT.
 * @param $param
 */
function main() {
    
    $sourceFiles = scandir(MACLAN_FOLDER);
    
    foreach ($sourceFiles as $sourceFile) {
        
        // Exclude relative directory symbols.
        if ($sourceFile == '.' && $sourceFile == '..')
            continue;
        
        // Get content.
        $content = file_get_contents($sourceFile);
    }
}
main();