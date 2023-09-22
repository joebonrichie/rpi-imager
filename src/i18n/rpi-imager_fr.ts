<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="171"/>
        <source>Error writing to storage</source>
        <translation>Erreur d&apos;écriture dans le stockage</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="197"/>
        <location filename="../downloadextractthread.cpp" line="386"/>
        <source>Error extracting archive: %1</source>
        <translation>Erreur lors de l&apos;extraction de l&apos;archive&#160;: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="262"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Erreur lors du montage de la partition FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="282"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Le système d&apos;exploitation n&apos;a pas monté la partition FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="305"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Erreur lors du changement du répertoire &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="166"/>
        <source>Error running diskpart: %1</source>
        <translation>Erreur lors de l&apos;exécution de diskpart&#160;: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="187"/>
        <source>Error removing existing partitions</source>
        <translation>Erreur lors de la suppression des partitions existantes</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="213"/>
        <source>Authentication cancelled</source>
        <translation>Authentification annulée</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="216"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Erreur lors de l&apos;exécution d&apos;authopen pour accéder au périphérique du stockage &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Veuillez vérifier dans les réglages de confidentialité (sous &apos;fichiers et dossiers&apos;) si &apos;Raspberry Pi Imager&apos; est autorisé à accéder aux volumes amovibles (ou bien donnez-lui accès complet au disque).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="239"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Impossible d&apos;ouvrir le périphérique de stockage &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="281"/>
        <source>discarding existing data on drive</source>
        <translation>suppression des données existantes sur le disque</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="301"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>mise à zéro du premier et du dernier Mo du disque</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="307"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Erreur d&apos;écriture lors du formatage du MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="813"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Erreur de lecture du stockage.&lt;br&gt;La carte SD est peut-être défectueuse.</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">En attente du montage de la partition FAT</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">Erreur lors du montage de la partition FAT32</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">Le système d&apos;exploitation n&apos;a pas monté la partition FAT32</translation>
    </message>
    <message>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation type="vanished">Impossible de personnaliser. Le fichier &apos;%1&apos; n&apos;existe pas.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="885"/>
        <source>Customizing image</source>
        <translation>Personnalisation de l&apos;image</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">Erreur lors de la création de firstrun.sh sur la partition FAT</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">Erreur lors de la création de config.txt sur la partition FAT</translation>
    </message>
    <message>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation type="vanished">Erreur lors de la création du fichier user-data cloudinit sur la partition FAT</translation>
    </message>
    <message>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation type="vanished">Erreur lors de la création du fichier network-config cloudinit sur la partition FAT</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">Erreur lors de l&apos;écriture de cmdline.txt sur la partition FAT</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="451"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Accès refusé lors de l&apos;écriture d&apos;un fichier sur le disque.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="456"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>L&apos;accès contrôlé aux dossiers semble être activé. Veuillez ajouter rpi-imager.exe et fat32format.exe à la liste des applications autorisées et réessayez.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="463"/>
        <source>Error writing file to disk</source>
        <translation>Erreur d&apos;écriture de fichier sur le disque</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="482"/>
        <source>Error downloading: %1</source>
        <translation>Erreur de téléchargement&#160;: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="705"/>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Erreur d&apos;écriture dans le stockage (lors du formatage)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="712"/>
        <location filename="../downloadthread.cpp" line="764"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Erreur d&apos;écriture dans le stockage (pendant l&apos;exécution de fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="693"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Téléchargement corrompu. La signature ne correspond pas</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="118"/>
        <source>unmounting drive</source>
        <translation>démontage du disque</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="138"/>
        <source>opening drive</source>
        <translation>ouverture du disque</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="319"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Erreur d&apos;écriture lors de la tentative de formatage de la dernière partie de la carte.&lt;br&gt;La carte annonce peut-être une capacité erronée (contrefaçon possible).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="408"/>
        <source>starting download</source>
        <translation>début du téléchargement</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="747"/>
        <source>Error writing first block (partition table)</source>
        <translation>Erreur lors de l&apos;écriture du premier bloc (table de partition)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="832"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>La vérification de l&apos;écriture à échoué. Le contenu de la carte SD est différent de ce qui y a été écrit.</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Erreur de partitionnement&#160;: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Erreur lors du démarrage de fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Erreur lors de l&apos;exécution de fat32format&#160;: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Erreur lors de la détermination de la nouvelle lettre du stockage</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Périphérique non valide&#160;: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Erreur de formatage (via udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Erreur lors du démarrage de sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Le partitionnement n&apos;a pas créé la partition FAT %1 attendue</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Erreur lors du démarrage de mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Erreur lors de l&apos;exécution de mkfs.fat&#160;: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatage non implémenté pour cette plateforme</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="248"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>La capacité de stockage n&apos;est pas assez grande.&lt;br&gt;Elle doit être d&apos;au moins %1 Go.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="254"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Le fichier source n&apos;est pas une image disque valide.&lt;br&gt;La taille du fichier (d&apos;%1 octets) n&apos;est pas un multiple de 512 octets.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="442"/>
        <source>Downloading and writing image</source>
        <translation>Téléchargement et écriture de l&apos;image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="575"/>
        <source>Select image</source>
        <translation>Sélectionner l&apos;image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="864"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Voulez-vous pré-remplir le mot de passe Wi-Fi à partir du trousseau du système&#160;?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>ouverture de l&apos;image disque</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Erreur lors de l&apos;ouverture de l&apos;image disque</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="98"/>
        <source>NO</source>
        <translation>NON</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="109"/>
        <source>YES</source>
        <translation>OUI</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="120"/>
        <source>CONTINUE</source>
        <translation>CONTINUER</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>QUIT</source>
        <translation>QUITTER</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="80"/>
        <source>Advanced options</source>
        <translation>Réglages avancés</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="97"/>
        <source>Image customization options</source>
        <translation>Options de personnalisation de l&apos;image</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="105"/>
        <source>for this session only</source>
        <translation>pour cette session uniquement</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="106"/>
        <source>to always use</source>
        <translation>pour toutes les sessions</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="120"/>
        <source>Set hostname:</source>
        <translation>Nom d&apos;hôte</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="140"/>
        <source>Enable SSH</source>
        <translation>Activer SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="162"/>
        <source>Use password authentication</source>
        <translation>Utiliser un mot de passe pour l&apos;authentification</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="172"/>
        <source>Allow public-key authentication only</source>
        <translation>Authentification via clef publique</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="190"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>Définir authorized_keys pour &apos;%1&apos;&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Configure wireless LAN</source>
        <translation>Configurer le Wi-Fi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="283"/>
        <source>SSID:</source>
        <translation>SSID&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="237"/>
        <location filename="../OptionsPopup.qml" line="303"/>
        <source>Password:</source>
        <translation>Mot de passe&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="203"/>
        <source>Set username and password</source>
        <translation>Définir nom d&apos;utilisateur et mot de passe</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="222"/>
        <source>Username:</source>
        <translation>Nom d&apos;utilisateur&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="298"/>
        <source>Hidden SSID</source>
        <translation>SSID caché</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="319"/>
        <source>Show password</source>
        <translation>Afficher le mot de passe</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="324"/>
        <source>Wireless LAN country:</source>
        <translation>Pays Wi-Fi&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="335"/>
        <source>Set locale settings</source>
        <translation>Définir les réglages locaux</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="345"/>
        <source>Time zone:</source>
        <translation>Fuseau horaire&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="355"/>
        <source>Keyboard layout:</source>
        <translation>Type de clavier&#160;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="368"/>
        <source>Persistent settings</source>
        <translation>Réglages permanents</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="376"/>
        <source>Play sound when finished</source>
        <translation>Jouer un son quand terminé</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="380"/>
        <source>Eject media when finished</source>
        <translation>Éjecter le média quand terminé</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="384"/>
        <source>Enable telemetry</source>
        <translation>Activer la télémétrie</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="397"/>
        <source>SAVE</source>
        <translation>ENREGISTRER</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="111"/>
        <source>Internal SD card reader</source>
        <translation>Lecteur de carte SD interne</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="73"/>
        <source>Warning: advanced settings set</source>
        <translation>Attention&#160;: réglages avancés définis</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="87"/>
        <source>Would you like to apply the image customization settings saved earlier?</source>
        <translation>Voulez-vous appliquer les réglages de personnalisation de l&apos;image enregistrés précédemment&#160;?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="96"/>
        <source>NO</source>
        <translation>NON</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="106"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NON, EFFACER LES RÉGLAGES</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="116"/>
        <source>YES</source>
        <translation>OUI</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="126"/>
        <source>EDIT SETTINGS</source>
        <translation>MODIFIER RÉGLAGES</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="24"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="99"/>
        <location filename="../main.qml" line="399"/>
        <source>Operating System</source>
        <translation>Système d&apos;exploitation</translation>
    </message>
    <message>
        <location filename="../main.qml" line="111"/>
        <source>CHOOSE OS</source>
        <translation>CHOISIR L&apos;OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="123"/>
        <source>Select this button to change the operating system</source>
        <translation>Sélectionner ce bouton pour changer le système d&apos;exploitation</translation>
    </message>
    <message>
        <location filename="../main.qml" line="135"/>
        <location filename="../main.qml" line="713"/>
        <source>Storage</source>
        <translation>Stockage</translation>
    </message>
    <message>
        <location filename="../main.qml" line="147"/>
        <location filename="../main.qml" line="1041"/>
        <source>CHOOSE STORAGE</source>
        <translation>CHOISIR LE STOCKAGE</translation>
    </message>
    <message>
        <source>Select this button to change the destination SD card</source>
        <translation type="vanished">Sélectionnez ce bouton pour changer la carte SD de destination</translation>
    </message>
    <message>
        <location filename="../main.qml" line="173"/>
        <source>WRITE</source>
        <translation>ÉCRIRE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="177"/>
        <source>Select this button to start writing the image</source>
        <translation>Sélectionner ce bouton pour commencer l&apos;écriture de l&apos;image</translation>
    </message>
    <message>
        <location filename="../main.qml" line="218"/>
        <source>CANCEL WRITE</source>
        <translation>ANNULER L&apos;ÉCRITURE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="221"/>
        <location filename="../main.qml" line="968"/>
        <source>Cancelling...</source>
        <translation>Annulation...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="229"/>
        <source>CANCEL VERIFY</source>
        <translation>ANNULER LA VÉRIFICATION</translation>
    </message>
    <message>
        <location filename="../main.qml" line="232"/>
        <location filename="../main.qml" line="991"/>
        <location filename="../main.qml" line="1060"/>
        <source>Finalizing...</source>
        <translation>Finalisation...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="505"/>
        <location filename="../main.qml" line="1025"/>
        <source>Erase</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="506"/>
        <source>Format card as FAT32</source>
        <translation>Formater la carte SD en FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="515"/>
        <source>Use custom</source>
        <translation>Utiliser image personnalisée</translation>
    </message>
    <message>
        <location filename="../main.qml" line="516"/>
        <source>Select a custom .img from your computer</source>
        <translation>Sélectionner une image disque personnalisée (.img) sur votre ordinateur</translation>
    </message>
    <message>
        <location filename="../main.qml" line="461"/>
        <source>Back</source>
        <translation>Retour</translation>
    </message>
    <message>
        <location filename="../main.qml" line="157"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Sélectionner ce bouton pour modifier le périphérique de stockage de destination</translation>
    </message>
    <message>
        <location filename="../main.qml" line="247"/>
        <source>Select this button to access advanced settings</source>
        <translation>Sélectionner ce bouton pour accéder aux réglages avancés</translation>
    </message>
    <message>
        <location filename="../main.qml" line="261"/>
        <source>Using custom repository: %1</source>
        <translation>Utilisation d&apos;un dépôt personnalisé&#160;: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Navigation au clavier&#160;: &lt;tab&gt; passer au bouton suivant &lt;espace&gt; presser un bouton/sélectionner un élément &lt;flèche haut/bas&gt; monter/descendre dans les listes</translation>
    </message>
    <message>
        <location filename="../main.qml" line="290"/>
        <source>Language: </source>
        <translation>Langue&#160;: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="313"/>
        <source>Keyboard: </source>
        <translation>Clavier&#160;: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="462"/>
        <source>Go back to main menu</source>
        <translation>Retour au menu principal</translation>
    </message>
    <message>
        <location filename="../main.qml" line="628"/>
        <source>Released: %1</source>
        <translation>Publié le&#160;: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="638"/>
        <source>Cached on your computer</source>
        <translation>Mis en cache sur votre ordinateur</translation>
    </message>
    <message>
        <location filename="../main.qml" line="640"/>
        <source>Local file</source>
        <translation>Fichier local</translation>
    </message>
    <message>
        <location filename="../main.qml" line="641"/>
        <source>Online - %1 GB download</source>
        <translation>En ligne - %1 GO à télécharger</translation>
    </message>
    <message>
        <location filename="../main.qml" line="766"/>
        <location filename="../main.qml" line="818"/>
        <location filename="../main.qml" line="824"/>
        <source>Mounted as %1</source>
        <translation>Monté sur %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="820"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[PROTÉGÉ EN ÉCRITURE]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="862"/>
        <source>Are you sure you want to quit?</source>
        <translation>Voulez-vous vraiment quitter&#160;?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="863"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager est encore occupé.&lt;br&gt;Voulez-vous vraiment quitter&#160;?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="882"/>
        <source>Preparing to write...</source>
        <translation>Préparation de l&apos;écriture...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="906"/>
        <source>Update available</source>
        <translation>Mise à jour disponible</translation>
    </message>
    <message>
        <location filename="../main.qml" line="907"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Une version plus récente d&apos;Imager est disponible.&lt;br&gt;Voulez-vous accéder au site web pour la télécharger&#160;?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1001"/>
        <source>Preparing to write... (%1)</source>
        <translation>Préparation de l&apos;écriture... (%1)</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; a bien été écrit sur &lt;b&gt;%2&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1290"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>La carte SD est protégée en écriture.&lt;br&gt;Poussez vers le haut le commutateur de verrouillage sur le côté gauche de la carte et essayez à nouveau.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="874"/>
        <source>Warning</source>
        <translation>Attention</translation>
    </message>
    <message>
        <location filename="../main.qml" line="971"/>
        <source>Writing... %1%</source>
        <translation>Écriture... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="895"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Toutes les données sur le périphérique de stockage &apos;%1&apos; vont être supprimées.&lt;br&gt;Voulez-vous vraiment continuer&#160;?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="950"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Erreur lors du téléchargement de la liste des systèmes d&apos;exploitation à partir d&apos;Internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="994"/>
        <source>Verifying... %1%</source>
        <translation>Vérification... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1017"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1024"/>
        <source>Write Successful</source>
        <translation>Écriture réussie</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1026"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; a bien été effacé&lt;br&gt;&lt;br&gt;Vous pouvez retirer la carte SD du lecteur</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1033"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; a bien été écrit sur &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;Vous pouvez retirer la carte SD du lecteur</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1101"/>
        <source>Error parsing os_list.json</source>
        <translation>Erreur de lecture du fichier os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1274"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Connecter d&apos;abord une clé USB contenant les images.&lt;br&gt;Les images doivent se trouver dans le dossier racine de la clé USB.</translation>
    </message>
</context>
</TS>
